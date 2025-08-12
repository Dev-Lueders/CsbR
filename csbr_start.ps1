# Start-Dev.ps1

param(
  [string]$FrontendDir = "D:\Nicks School Work\Personal Projects\creatorsandboxreview\WebApp\csbr",
  [string]$BackendDir  = "D:\Nicks School Work\Personal Projects\creatorsandboxreview\WebApp\csbr\server\routes\RTManager",
  [string]$FrontendCmd = "npm run dev",        # Frontend start command
  [string]$BackendCmd  = "nodemon index.js",   # Backend start command
  [string]$FrontendURL = "http://localhost:5173/",
  [switch]$Install
)

# Pick PowerShell host
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

Write-Host "Launching backend and frontend in separate windows..."
$backendPid  = Start-ServiceWindow -name "Backend"  -dir $BackendDir  -cmd $BackendCmd
$frontendPid = Start-ServiceWindow -name "Frontend" -dir $FrontendDir -cmd $FrontendCmd

# Store PIDs so we can stop them later
$pidFile = Join-Path $PSScriptRoot ".dev.pids"
@(
  "backend=$backendPid"
  "frontend=$frontendPid"
  "host=$psHost"
) | Set-Content -Path $pidFile -Encoding ascii

Write-Host "Done. PIDs saved to $pidFile"

# Open browser to frontend URL
Start-Process $FrontendURL
Write-Host "Opened browser at $FrontendURL"