# Auto Location 
$repoPath = Get-Location 

# Changes directory to the installed location
cd $repoPath

# Path
$commitFile = "commit_count.txt"
$gitignoreFile = ".gitignore"
$autoCommitFile = "auto_commit.ps1"

# Checks for commit_count file; if it's there, adds auto_commit to gitignore
if (Test-Path $commitFile) {
    $gitignoreContent = Get-Content $gitignoreFile
    Add-Content $gitignoreFile "`n$autoCommitFile"
    Write-Host "Added $autoCommitFile to gitignore to prevent tracking by Git."
} else {
    Write-Host "Adding commit_count.txt for auto Time Stamping and Commit Count"
    Write-Host "Running auto_commit.ps1 again, moves auto_commit.ps1 to gitignore"
    Write-Host "Will use Git Hub username or Windows Systems Name to add to comments"
}

# Checks for name in commit_count.txt, If not there will ask for initials
if (Test-Path $commitFile) {
    $name = Get-Content $commitFile
} else {
    $gitHubName = git config user.name
    $windowsName = $env:USERNAME

    Write-Host "Choose a name to store in commit_count.txt:"
    Write-Host "1) GitHub Username: $gitHubName"
    Write-Host "2) Windows Username: $windowsName"
    Write-Host "3) Type in Your Initials:"
    $choice = Read-Host "Enter 1 for GitHub or 2 for Windows username or 3 to choose your name: "
    
    if ($choice -eq "1" -and $gitHubName) {
        $name = $gitHubName
    } elseif ($choice -eq "2") {
        $name = $windowsName
    } elseif ($choice -eq "3") {
        $name = Read-Host "Your initials please "
    } else {
        Write-Host "Invalid Choice. Defaulting to Windows Username."
        $name = $windowsName
    }

    # Adds name to commit_count file
    $name | Out-File -Encoding utf8 $commitFile
}

$name = Get-Content $commitFile

# Checks for commit count.txt If not, start at 1
if (Test-Path $commitFile) {
    $commitNum = [int](Get-Content $commitFile) + 1
} else {
    $commitNum = 1
}

# Reads Username from commit_count.txt
$name | Out-File -Encoding utf8 $commitFile

# Commit number added
$commitNum | Out-File $commitFile

# Time stamp
$timestamp = Get-Date -Format "dd_HH-mm_MM-yyyy"

# Enter your own comment
$customComment = Read-Host "Enter commit message"

# Make commit
$commitMessage = "#$commitNum - $customComment - $timestamp - (Committed by: $name)"

# No comment, no problem
if ($customComment) {
    $commitMessage += " - $customComment"
}

# Getting current branch
$currentBranch = git rev-parse --abbrev-ref HEAD

# Adding to git
git add .
git commit -m "$commitMessage"
git push origin $currentBranch

Write-Output "Committed with message: $commitMessage"
