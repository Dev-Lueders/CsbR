# Auto Location 
$repoPath = Get-Location 
cd $repoPath  # Change directory to the installed location

# Paths
$commitFile = "commit_count.txt"
$gitignoreFile = ".gitignore"
$autoCommitFile = "auto_commit.ps1"

if (Test-Path $commitFile) {
    Write-Output "commit_count.txt found. Proceeding with auto commit..."

    # Ensure .gitignore exists and doesn't already contain auto_commit.ps1
    if (!(Test-Path $gitignoreFile)) {
        Write-Output ".gitignore not found. Creating one..."
        New-Item -Path $gitignoreFile -ItemType File -Force | Out-Null
    }

    $gitignoreContent = Get-Content $gitignoreFile
    if ($gitignoreContent -notcontains $autoCommitFile) {
        Add-Content $gitignoreFile "`n$autoCommitFile"
        Write-Host "Added $autoCommitFile to .gitignore to prevent tracking by Git."
    } else {
        Write-Host "$autoCommitFile is already in .gitignore."
    }

    # Get commit data (force array format)
    $commitData = @(Get-Content $commitFile)

    # Check if file is corrupted or missing data
    if ($commitData.Count -lt 2) {
        Write-Host "Error: commit_count.txt is missing data or corrupted."
        Write-Host "Resetting commit_count.txt..."
        $commitData = @("UnknownUser", "0")
        $commitData -join "`r`n" | Set-Content -Path $commitFile -Encoding utf8
    }

    # Assign values safely
    $name = $commitData[0]
    $commitNum = [int]$commitData[1]
    Write-Output "$($name) will be used for comments"
    Write-Output "$($commitNum) commits before this commit"

    # Increment commit count
    $commitNum++
    $commitData[1] = $commitNum.ToString()

    # Prepare commit message
    $timestamp = Get-Date -Format "dd_HH-mm_MM-yyyy"
    $customComment = Read-Host "Enter commit message"
    $commitMessage = "#$commitNum - $customComment - $timestamp - (Committed by: $name)"

    # Git operations
    $currentBranch = git rev-parse --abbrev-ref HEAD
    git add .
    git commit -m "$commitMessage"
    git push origin $currentBranch

    Write-Output "Committed with message: $commitMessage"

    # Update commit_count.txt
    $commitData -join "`r`n" | Set-Content -Path $commitFile -Encoding utf8

} else {
    Write-Host "commit_count.txt not found. Initializing..."

    # Prompt for user selection
    $gitHubName = git config user.name
    $windowsName = $env:USERNAME

    Write-Host "Choose a name to store in commit_count.txt:"
    Write-Host "1) GitHub Username: $gitHubName"
    Write-Host "2) Windows Username: $windowsName"
    Write-Host "3) Type in Your Initials:"

    $finalChoice = ""
    $choice = Read-Host "Enter 1 for GitHub, 2 for Windows username, or 3 for initials"

    if ($choice -eq "1" -and $gitHubName) {
        $finalChoice = $gitHubName
    } elseif ($choice -eq "2") {
        $finalChoice = $windowsName
    } elseif ($choice -eq "3") {
        $finalChoice = Read-Host "Enter your initials"
    } else {
        Write-Host "Invalid Choice. Defaulting to Windows Username: $($windowsName)"
        $finalChoice = $windowsName
        Write-Host "You can change this by modifying commit_count.txt manually."
    }

    # Create commit_count.txt and write user choice
    $commitData = @($finalChoice, "0")
    $commitData -join "`r`n" | Set-Content -Path $commitFile -Encoding utf8

    Write-Output "commit_count.txt created. Please rerun auto_commit.ps1 to proceed."
}
