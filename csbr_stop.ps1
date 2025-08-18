# csbr_stop.ps1 — Kill backend/frontend trees + ONLY the dev Chrome window

param(
  [switch]$Confirm
)

$pidFile = Join-Path $PSScriptRoot ".dev.pids"
if (!(Test-Path $pidFile)) {
    Write-Warning "No PID file found. Nothing to stop."
    exit 0
}

# Parse pid file (needs chromedir= from start script)
$map = @{}
Get-Content $pidFile | ForEach-Object {
    $parts = $_.Split("=",2)
    if ($parts.Count -eq 2) { $map[$parts[0]] = $parts[1] }
}
$backendRoot  = ($map["backend"]  -as [int])
$frontendRoot = ($map["frontend"] -as [int])
$chromeDir    = $map["chromedir"]

function Get-Descendants([int]$rootPid) {
    # Returns ALL descendants (not including root)
    if (-not $rootPid) { return @() }
    $procTable = @{}
    Get-CimInstance Win32_Process | ForEach-Object { $procTable[[int]$_.ProcessId] = $_ }
    $toVisit = New-Object System.Collections.Generic.Queue[System.Int32]
    $desc = New-Object System.Collections.Generic.List[System.Int32]
    $toVisit.Enqueue($rootPid)
    while ($toVisit.Count -gt 0) {
        $current = $toVisit.Dequeue()
        foreach ($p in $procTable.Values | Where-Object { $_.ParentProcessId -eq $current }) {
            $desc.Add([int]$p.ProcessId)
            $toVisit.Enqueue([int]$p.ProcessId)
        }
    }
    return $desc
}

function Plan-TreeKill([string]$label, [int]$rootPid) {
    $plan = @()
    if ($rootPid -and (Get-Process -Id $rootPid -ErrorAction SilentlyContinue)) {
        $desc = Get-Descendants $rootPid
        # Kill descendants first (bottom-up), then root
        foreach ($pid in ($desc | Sort-Object -Descending)) {
            $p = Get-Process -Id $pid -ErrorAction SilentlyContinue
            if ($p) { $plan += [pscustomobject]@{ Label="$label child"; ProcId=$pid; Name=$p.Name; Source="tree" } }
        }
        $root = Get-Process -Id $rootPid -ErrorAction SilentlyContinue
        if ($root) { $plan += [pscustomobject]@{ Label="$label window"; ProcId=$rootPid; Name=$root.Name; Source="root" } }
    }
    return $plan
}

# Build target list: backend tree + frontend tree
$targets = @()
$targets += Plan-TreeKill "Backend PowerShell"  $backendRoot
$targets += Plan-TreeKill "Frontend PowerShell" $frontendRoot

# Add ONLY the Chrome using our temp profile (from start script)
if ($chromeDir) {
    try {
        $chromeProcs = Get-CimInstance Win32_Process -Filter "name='chrome.exe'"
        foreach ($cp in $chromeProcs) {
            $cmd = $cp.CommandLine
            if ($cmd -and $cmd -like "*$chromeDir*") {
                $targets += [pscustomobject]@{
                    Label  = "Dev Chrome (DevTools)"
                    ProcId = [int]$cp.ProcessId
                    Name   = "chrome"
                    Source = "chromedir"
                }
            }
        }
    } catch {
        Write-Warning "Could not enumerate Chrome processes: $($_.Exception.Message)"
    }
} else {
    Write-Host "No 'chromedir' in pid file; skipping Chrome shutdown."
}

# Deduplicate (in case of overlap)
$targets = $targets | Sort-Object ProcId -Unique

if ($targets.Count -eq 0) {
    Write-Host "Nothing to stop."
    Remove-Item $pidFile -ErrorAction SilentlyContinue
    exit 0
}

if ($Confirm) {
    Write-Host "Will terminate the following processes:`n"
    foreach ($t in $targets) {
        Write-Host (" - {0} (PID {1}, {2}) via {3}" -f $t.Label, $t.ProcId, $t.Name, $t.Source)
    }
    $ans = Read-Host "`nProceed? (Y/N)"
    if ($ans -notin @('Y','y')) {
        Write-Host "Aborted."
        exit 0
    }
}

# Kill in listed order (children first, then root windows; Chrome after)
foreach ($t in $targets) {
    try {
        Write-Host "Stopping $($t.Label) (PID $($t.ProcId))..."
        Stop-Process -Id $t.ProcId -Force
    } catch {
        Write-Warning "Failed to stop PID $($t.ProcId): $($_.Exception.Message)"
    }
}

Remove-Item $pidFile -ErrorAction SilentlyContinue
Write-Host "Done. Dev trees and targeted Chrome closed."