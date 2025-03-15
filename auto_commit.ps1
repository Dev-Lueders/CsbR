# Function to set up the user name
function SetUpUserName {
    $gitHubName = git config user.name
    $windowsName = $env:USERNAME

    Write-Output "Choose a name to store in commit_count.txt:"
    Write-Output "1) GitHub Username: $gitHubName"
    Write-Output "2) Windows Username: $windowsName"
    Write-Output "3) Type in Your Initials:"

    # Prompt user to select an option
    $choice = Read-Host "Enter 1 for GitHub or 2 for Windows username or 3 to Type your initials: "

    # Based on the user's choice, assign the name
    if ($choice -eq "1" -and $gitHubName) {
        Write-Output "User chose GitHub Username: $gitHubName"
        return $gitHubName
    } elseif ($choice -eq "2") {
        Write-Output "User chose Windows Username: $windowsName"
        return $windowsName
    } elseif ($choice -eq "3") {
        $initials = Read-Host "Your initials please"
        Write-Output "User chose initials: $initials"
        return $initials
    } else {
        Write-Output "Invalid Choice. Defaulting to Windows Username."
        return $windowsName
    }
}

# Path to commit_count.txt (This file stores the username and commit number)
$commitFile = "commit_count.txt"

# Check if the commit_count.txt file exists
if (Test-Path $commitFile) {
    # Read the content of the commit_count.txt file
    $commitData = Get-Content $commitFile

    # Check if the file has exactly 2 lines
    if ($commitData.Count -eq 2) {
        # Check if the first line is a string and the second line is a valid number
        if ($commitData[0] -match "^[a-zA-Z0-9_]+$" -and $commitData[1] -match "^\d+$") {
            $name = $commitData[0]   # This is the final name to store
            $commitNum = [int]$commitData[1]
        } else {
            Write-Output "Invalid format in commit_count.txt."
            Write-Output "The first line should be a string (username or initials)"
            Write-Output "The second line should be a number (commit count)."
            # Clear the file and re-initialize setup
            Clear-Content $commitFile
            $chosenName = SetUpUserName  # Assigning to a different variable
            $name = $chosenName  # Assigning to the name variable
            $commitNum = 1
            # Only store the username (not the prompts)
            $name | Out-File -Encoding utf8 $commitFile
            $commitNum | Out-File -Append -Encoding utf8 $commitFile
        }
    } else {
        Write-Output "commit_count.txt not a valid format. Re-initializing..."
        Clear-Content $commitFile
        $chosenName = SetUpUserName  # Assigning to a different variable
        $name = $chosenName  # Assigning to the name variable
        $commitNum = 1
        # Only store the username (not the prompts)
        $name | Out-File -Encoding utf8 $commitFile
        $commitNum | Out-File -Append -Encoding utf8 $commitFile
    }
} else {
    Write-Output "commit_count.txt does not exist. Setting it up..."
    $chosenName = SetUpUserName  # Assigning to a different variable
    $name = $chosenName  # Assigning to the name variable
    $commitNum = 1
    # Only store the username (not the prompts)
    $name | Out-File -Encoding utf8 $commitFile
    $commitNum | Out-File -Append -Encoding utf8 $commitFile
}

# Increment the commit number for the new commit
$commitNum++

# Save the updated username and commit number back to commit_count.txt
$name | Out-File -Encoding utf8 $commitFile
$commitNum | Out-File -Append -Encoding utf8 $commitFile

# Timestamp for commit
$timestamp = Get-Date -Format "dd_HH-mm_MM-yyyy"

# Prompt for a custom commit message
$customComment = Read-Host "Enter commit message"

# Generate the commit message
$commitMessage = "#$commitNum - $customComment - $timestamp - (Committed by: $name)"

# Get current branch name
$currentBranch = git rev-parse --abbrev-ref HEAD

# Stage changes, commit, and push to GitHub
git add .
git commit -m "$commitMessage"
git push origin $currentBranch

Write-Output "Committed with message: $commitMessage"
