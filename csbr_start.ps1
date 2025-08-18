# csbr_start.ps1

param(
  [string]$FrontendDir = "D:\Nicks School Work\Personal Projects\creatorsandboxreview\WebApp\csbr",
  [string]$BackendDir  = "D:\Nicks School Work\Personal Projects\creatorsandboxreview\WebApp\csbr\server\routes\RTManager",
  [string]$FrontendCmd = "npm run dev",        # Frontend start command
  [string]$BackendCmd  = "nodemon index.js",   # Backend start command
  [string]$FrontendURL = "http://localhost:5173/",
  [string]$ChromePath  = "C:\Program Files\Google\Chrome\Application\chrome.exe", # Adjust if needed
  [switch]$Install
)

# pick PowerShell host
$psHost = (Get-Command pwsh -ErrorAction SilentlyContinue) ? "pwsh" : "powershell.exe"

function Start-ServiceWindow([string]$name, [string]$dir, [string]$cmd) {
    if (!(Test-Path $dir)) { throw "Path not found: $dir" }
    if ($Install) {
        Write-Host "[$name] npm install..."
        pushd $dir; npm install; popd
    }

    $title = "$name — $(Split-Path $dir -Leaf)"
    $command = @"
`$Host.UI.RawUI.WindowTitle = '$title';
Set-Location '$dir';
$cmd;
Read-Host '[$name] exited. Press Enter to close...'
"@

    $proc = Start-Process -FilePath $psHost `
        -ArgumentList @("-NoExit","-Command",$command) `
        -PassThru -WindowStyle Normal

    return $proc.Id
}

function Wait-ForPort([string]$url, [int]$timeoutSeconds = 90) {
    $deadline = (Get-Date).AddSeconds($timeoutSeconds)
    $hostUri = [System.Uri]$url
    $port = $hostUri.Port
    $hostName = $hostUri.Host

    Write-Host "Waiting for $url to be available..."
    while ((Get-Date) -lt $deadline) {
        try {
            $tcpClient = New-Object System.Net.Sockets.TcpClient
            $tcpClient.Connect($hostName, $port)
            if ($tcpClient.Connected) {
                $tcpClient.Close()
                Write-Host "Port $port is open. Service is ready."
                return $true
            }
        } catch {
            Start-Sleep -Seconds 1
        }
    }
    Write-Warning "Timed out waiting for $url to respond."
    return $false
}

Write-Host "Launching backend and frontend in separate windows..."
$backendPid  = Start-ServiceWindow -name "Backend"  -dir $BackendDir  -cmd $BackendCmd
$frontendPid = Start-ServiceWindow -name "Frontend" -dir $FrontendDir -cmd $FrontendCmd

# store PIDs so we can stop them later
$pidFile = Join-Path $PSScriptRoot ".dev.pids"
@(
    "backend=$backendPid"
    "frontend=$frontendPid"
    "host=$psHost"
) | Set-Content -Path $pidFile -Encoding ascii

Write-Host "Done. PIDs saved to $pidFile"

# wait for frontend, then open Chrome with DevTools undocked
if (Wait-ForPort $FrontendURL 90) {
    $tempProfile = Join-Path $env:TEMP "csbr_chrome_profile"
    if (!(Test-Path $tempProfile)) { New-Item -ItemType Directory -Path $tempProfile | Out-Null }

    if (Test-Path $ChromePath) {
        Start-Process $ChromePath @(
            "--new-window",
            "--user-data-dir=""$tempProfile""",
            "--auto-open-devtools-for-tabs",
            "--devtools-window",
            $FrontendURL
        )
        Write-Host "Opened Chrome at $FrontendURL with DevTools in separate window"
    } else {
        Write-Warning "Chrome not found at $ChromePath. Opening in default browser instead."
        Start-Process $FrontendURL
    }
} else {
    Write-Warning "Frontend did not start in time. Browser not opened."
}