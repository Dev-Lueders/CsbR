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
}

# Counts the commits
$commitFile = "commit_count.txt"

# Seeing how many commit files there are. If not, start at 1
if (Test-Path $commitFile) {
    $commitNum = [int](Get-Content $commitFile) + 1
} else {
    $commitNum = 1
}

# New commit number added
$commitNum | Out-File $commitFile

# Time stamp
$timestamp = Get-Date -Format "dd_HH-mm_MM-yyyy"

# Enter your own comment
$customComment = Read-Host "Enter commit message"

# Make commit
$commitMessage = "#$commitNum - $customComment - $timestamp"

# No comment, no problem
if ($customComment) {
    $customMessage += " - $customComment"
}

# Getting current branch
$currentBranch = git rev-parse --abbrev-ref HEAD

# Adding to git
git add .
git commit -m "$commitMessage"
git push origin $currentBranch

Write-Output "Committed with message: $commitMessage"
