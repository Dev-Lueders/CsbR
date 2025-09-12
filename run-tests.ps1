param(
    [ValidateSet('prompt', 'backend', 'frontend', 'both')]
    [string]$Suite = 'prompt',

    [ValidateSet('prompt', 'text', 'csv', 'both')]
    [string]$Out = 'prompt'
)

# --- UTF-8 + ANSI console setup (fix garbled symbols) ---
try { chcp 65001 > $null } catch {}
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8
if ($PSVersionTable.PSVersion.Major -ge 7) {
    $PSStyle.OutputRendering = 'Ansi'
}
$env:FORCE_COLOR = "1"

function Choose-Suite {
    Write-Host ""
    Write-Host "Select test suite:"
    Write-Host "  1) Backend  – runs npm run test:backend"
    Write-Host "  2) Frontend – runs npm run test:frontend"
    Write-Host "  3) Both     – runs backend then frontend"
    Write-Host "  0) Cancel   – abort"
    Write-Host ""
    while ($true) {
        switch (Read-Host "Enter choice (1,2,3 or 0 to cancel)") {
            '1' { return 'backend' }
            '2' { return 'frontend' }
            '3' { return 'both' }
            '0' { return 'cancel' }
            default { Write-Host "Invalid choice. Try again." }
        }
    }
}

function Choose-OutputMode {
    Write-Host ""
    Write-Host "Select output format:"
    Write-Host "  1) Text   – write a timestamped .txt log"
    Write-Host "  2) CSV    – write a one-row CSV summary"
    Write-Host "  3) Both   – write both text and CSV"
    Write-Host "  0) Cancel – abort"
    Write-Host ""
    while ($true) {
        switch (Read-Host "Enter choice (1,2,3 or 0 to cancel)") {
            '1' { return 'text' }
            '2' { return 'csv' }
            '3' { return 'both' }
            '0' { return 'cancel' }
            default { Write-Host "Invalid choice. Try again." }
        }
    }
}

if ($Suite -eq 'prompt') {
    $Suite = Choose-Suite
    if ($Suite -eq 'cancel') { Write-Host 'Canceled.'; exit 0 }
}
if ($Out -eq 'prompt') {
    $Out = Choose-OutputMode
    if ($Out -eq 'cancel') { Write-Host 'Canceled.'; exit 0 }
}

$ts = Get-Date -Format 'yyyyMMdd_HHmmss'
$dir = 'test-results'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
$base = "run_${Suite}_$ts"
$txtPath = Join-Path $dir "$base.txt"
$csvPath = Join-Path $dir "$base.csv"

$backendLines = @()
$frontendLines = @()
$backendCode = 0
$frontendCode = 0

# --- stream + capture backend ---
if ($Suite -in @('backend', 'both')) {
    Write-Host "`n===== BACKEND =====`n"
    & npm run test:backend 2>&1 | Tee-Object -Variable backendLines
    $backendCode = $LASTEXITCODE
}

# --- stream + capture frontend ---
if ($Suite -in @('frontend', 'both')) {
    Write-Host "`n===== FRONTEND =====`n"
    & npm run test:frontend 2>&1 | Tee-Object -Variable frontendLines
    $frontendCode = $LASTEXITCODE
}

# Combined/clean text for files
$combined = @()
if ($backendLines.Count) { $combined += '===== BACKEND ====='; $combined += $backendLines }
if ($frontendLines.Count) { $combined += '===== FRONTEND ====='; $combined += $frontendLines }
$combinedText = ($combined -join "`n")
$clean = $combinedText -replace "`e\[[0-9;]*m", ""  # strip ANSI for files

# Exit code: fail if any selected suite fails
$exit = switch ($Suite) {
    'backend' { $backendCode }
    'frontend' { $frontendCode }
    default { if ($backendCode -ne 0 -or $frontendCode -ne 0) { 1 } else { 0 } }
}

# Write text log
if ($Out -in @('text', 'both')) {
    $clean | Set-Content -Path $txtPath -Encoding UTF8
    Write-Host "Wrote log: $txtPath"
}

# CSV summary (best-effort regex)
if ($Out -in @('csv', 'both')) {
    $cleanBackend = (($backendLines -join "`n") -replace "`e\[[0-9;]*m", "")
    $cleanFrontend = (($frontendLines -join "`n") -replace "`e\[[0-9;]*m", "")

    $bPass = [int](([regex]::Match($cleanBackend, '(^|\n)\s*(\d+)\s+passing')).Groups[2].Value)
    $bFail = [int](([regex]::Match($cleanBackend, '(^|\n)\s*(\d+)\s+failing')).Groups[2].Value)
    $bDur = [double](([regex]::Match($cleanBackend, 'Duration\s+([0-9\.]+)s')).Groups[1].Value)

    $fPass = [int](([regex]::Match($cleanFrontend, 'Tests\s+(\d+)\s+passed')).Groups[1].Value)
    $fFail = [int](([regex]::Match($cleanFrontend, 'Tests\s+(\d+)\s+failed')).Groups[1].Value)
    $fFiles = [int](([regex]::Match($cleanFrontend, 'Test Files\s+(\d+)')).Groups[1].Value)
    $fDur = [double](([regex]::Match($cleanFrontend, 'Duration\s+([0-9\.]+)s')).Groups[1].Value)

    [pscustomobject]@{
        timestamp                 = (Get-Date).ToString('s')
        suite                     = $Suite
        backend_passing           = $bPass
        backend_failing           = $bFail
        backend_duration_seconds  = $bDur
        frontend_passed           = $fPass
        frontend_failed           = $fFail
        frontend_testfiles        = $fFiles
        frontend_duration_seconds = $fDur
        exit_code                 = $exit
    } | Export-Csv -NoTypeInformation -Path $csvPath -Encoding UTF8
    Write-Host "Wrote CSV: $csvPath"
}

$global:LASTEXITCODE = $exit
exit $exit