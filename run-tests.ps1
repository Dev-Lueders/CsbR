param(
    # Accept names or we'll prompt. No ValidateSet so we can accept "1,3" etc if passed in.
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

# Map digits -> suite names
$NumberToSuite = @{
    '1' = 'backend'
    '2' = 'frontend'
    '3' = 'ui'
    '4' = 'all'
}

function Parse-Selections {
    param([string]$InputText)

    if (-not $InputText) { return @() }

    $t = $InputText.Trim().ToLower()

    # Aliases / legacy
    if ($t -eq 'both') { return @('backend', 'frontend') }
    if ($t -eq 'all') { return @('backend', 'frontend', 'ui') }

    # Allow names separated by commas or spaces
    if ($t -match '[a-z]') {
        $parts = $t -split '[,\s]+' | Where-Object { $_ -ne '' }
        $normalized = foreach ($p in $parts) {
            switch ($p) {
                'back' { 'backend' ; break }
                'backend' { 'backend' ; break }
                'front' { 'frontend' ; break }
                'frontend' { 'frontend' ; break }
                'ui' { 'ui' ; break }
                'all' { 'backend'; 'frontend'; 'ui' ; break }
                'both' { 'backend'; 'frontend' ; break }
                default { $null }
            }
        }
        return @($normalized | Where-Object { $_ } | Select-Object -Unique)
    }

    # Otherwise treat as comma-separated numbers like "1,3"
    $nums = $t -split ',' | ForEach-Object { $_.Trim() } | Where-Object { $_ -match '^[0-4]$' }
    if ($nums -contains '0') { return @('cancel') }
    if ($nums -contains '4') { return @('backend', 'frontend', 'ui') } # all
    $picked = foreach ($n in $nums) { $NumberToSuite[$n] }
    return @($picked | Select-Object -Unique)
}

function Choose-Suite {
    Write-Host ""
    Write-Host "Select test suite(s):"
    Write-Host "  1) Backend   – runs npm run test:backend"
    Write-Host "  2) Frontend  – runs npm run test:frontend"
    Write-Host "  3) UI        – runs npm run test:ui"
    Write-Host "  4) All       – runs 1, 2, then 3"
    Write-Host "  0) Cancel    – abort"
    Write-Host ""
    Write-Host "Tip: enter comma-separated choices for a mix, e.g. '1,3' (Backend + UI)."
    while ($true) {
        $raw = Read-Host "Enter choice(s) (1,2,3,4 or 0 to cancel)"
        $sel = Parse-Selections -InputText $raw
        if ($sel -contains 'cancel') { return @('cancel') }
        if ($sel.Count -gt 0) { return $sel }
        Write-Host "Invalid choice. Try again."
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

# Resolve suites
[string[]]$Selected = @()
if ($Suite -eq 'prompt') {
    $Selected = Choose-Suite
    if ($Selected -contains 'cancel') { Write-Host 'Canceled.'; exit 0 }
}
else {
    $Selected = Parse-Selections -InputText $Suite
    if ($Selected -contains 'cancel' -or $Selected.Count -eq 0) { Write-Host 'Canceled.'; exit 0 }
}

# Resolve output mode
if ($Out -eq 'prompt') {
    $Out = Choose-OutputMode
    if ($Out -eq 'cancel') { Write-Host 'Canceled.'; exit 0 }
}

$ts = Get-Date -Format 'yyyyMMdd_HHmmss'
$dir = 'test-results'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
$suiteTag = ($Selected -join '+')
$base = "run_${suiteTag}_$ts"
$txtPath = Join-Path $dir "$base.txt"
$csvPath = Join-Path $dir "$base.csv"

$backendLines = @(); $frontendLines = @(); $uiLines = @()
$backendCode = 0; $frontendCode = 0; $uiCode = 0

# --- stream + capture in deterministic order: backend -> frontend -> ui ---
if ($Selected -contains 'backend') {
    Write-Host "`n===== BACKEND =====`n"
    & npm run test:backend 2>&1 | Tee-Object -Variable backendLines
    $backendCode = $LASTEXITCODE
}

if ($Selected -contains 'frontend') {
    Write-Host "`n===== FRONTEND =====`n"
    & npm run test:frontend 2>&1 | Tee-Object -Variable frontendLines
    $frontendCode = $LASTEXITCODE
}

if ($Selected -contains 'ui') {
    Write-Host "`n===== UI =====`n"
    & npm run test:ui 2>&1 | Tee-Object -Variable uiLines
    $uiCode = $LASTEXITCODE
}

# Combined/clean text for files
$combined = @()
if ($backendLines.Count) { $combined += '===== BACKEND ====='; $combined += $backendLines }
if ($frontendLines.Count) { $combined += '===== FRONTEND ====='; $combined += $frontendLines }
if ($uiLines.Count) { $combined += '===== UI ====='; $combined += $uiLines }
$combinedText = ($combined -join "`n")
$clean = $combinedText -replace "`e\[[0-9;]*m", ""  # strip ANSI for files

# Exit code: fail if any selected suite fails
$exit = 0
if ($Selected -contains 'backend' -and $backendCode -ne 0) { $exit = 1 }
if ($Selected -contains 'frontend' -and $frontendCode -ne 0) { $exit = 1 }
if ($Selected -contains 'ui' -and $uiCode -ne 0) { $exit = 1 }

# Write text log
if ($Out -in @('text', 'both')) {
    $clean | Set-Content -Path $txtPath -Encoding UTF8
    Write-Host "Wrote log: $txtPath"
}

# CSV summary (best-effort regex for each runner)
if ($Out -in @('csv', 'both')) {
    $cleanBackend = (($backendLines -join "`n") -replace "`e\[[0-9;]*m", "")
    $cleanFrontend = (($frontendLines -join "`n") -replace "`e\[[0-9;]*m", "")
    $cleanUI = (($uiLines -join "`n") -replace "`e\[[0-9;]*m", "")

    # Mocha-ish
    $bPass = [int](([regex]::Match($cleanBackend, '(^|\n)\s*(\d+)\s+passing')).Groups[2].Value)
    $bFail = [int](([regex]::Match($cleanBackend, '(^|\n)\s*(\d+)\s+failing')).Groups[2].Value)
    $bDur = [double](([regex]::Match($cleanBackend, 'Duration\s+([0-9\.]+)s')).Groups[1].Value)

    # Vitest-ish
    $fPass = [int](([regex]::Match($cleanFrontend, 'Tests\s+(\d+)\s+passed')).Groups[1].Value)
    $fFail = [int](([regex]::Match($cleanFrontend, 'Tests\s+(\d+)\s+failed')).Groups[1].Value)
    $fFiles = [int](([regex]::Match($cleanFrontend, 'Test Files\s+(\d+)')).Groups[1].Value)
    $fDur = [double](([regex]::Match($cleanFrontend, 'Duration\s+([0-9\.]+)s')).Groups[1].Value)

    # UI (best effort; adjust as needed for Playwright/Cypress)
    $uPass = [int](([regex]::Match($cleanUI, '(\d+)\s+passed')).Groups[1].Value)
    $uFail = [int](([regex]::Match($cleanUI, '(\d+)\s+failed')).Groups[1].Value)
    $uDur = [double](([regex]::Match($cleanUI, 'Duration\s+([0-9\.]+)s')).Groups[1].Value)

    [pscustomobject]@{
        timestamp                 = (Get-Date).ToString('s')
        suites_run                = $suiteTag
        backend_passing           = $bPass
        backend_failing           = $bFail
        backend_duration_seconds  = $bDur
        frontend_passed           = $fPass
        frontend_failed           = $fFail
        frontend_testfiles        = $fFiles
        frontend_duration_seconds = $fDur
        ui_passed                 = $uPass
        ui_failed                 = $uFail
        ui_duration_seconds       = $uDur
        exit_code                 = $exit
    } | Export-Csv -NoTypeInformation -Path $csvPath -Encoding UTF8
    Write-Host "Wrote CSV: $csvPath"
}

$global:LASTEXITCODE = $exit
exit $exit