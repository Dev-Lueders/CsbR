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

    # Based on the user's choice, return the appropriate name
    if ($choice -eq "1" -and $gitHubName) {
        return $githubChoice=$gitHubName  # Return the GitHub username
    } elseif ($choice -eq "2") {
        return $windowsChoice=$windowsName  # Return the Windows username
    } elseif ($choice -eq "3") {
        $initials = Read-Host "Your initials please"
        return $intitalsChoice = $initials  # Return the initials
    } else {
        return $defaultChoice = $windowsName  # Default to Windows username if invalid choice
    }

# Set the choice to a variable (assume $choice is set from user input or earlier in the script)
$finalChoice = ""

if ($choice -eq "1" -and $gitHubName) {
    $finalChoice = $gitHubName  # Set $finalChoice to GitHub username
} elseif ($choice -eq "2") {
    $finalChoice = $windowsName  # Set $finalChoice to Windows username
} elseif ($choice -eq "3") {
    $initials = Read-Host "Your initials please"
    $finalChoice = $initials  # Set $finalChoice to initials
} else {
    $finalChoice = $windowsName  # Default to Windows username if invalid choice
}

# Return the final choice
return $finalChoice
	
}



# Path to commit_count.txt (This file stores the username and commit number)
$commitFile = "commit_count.txt"

# Create a variable to store the user's chosen name
$chosenName = $finalChoice  # Assign to $chosenName

Write-Output "Chosen name: $chosenName"  # Display the chosen name

# Check if the commit_count.txt file exists
if (Test-Path $commitFile) {
    # Read the content of the commit_count.txt file
    $commitData = Get-Content $commitFile

    # Check if the file has exactly 2 lines
    if ($commitData.Count -eq 2) {
        # Validate the format of the data in commit_count.txt
        if ($commitData[0] -match "^[a-zA-Z0-9_]+$" -and $commitData[1] -match "^\d+$") {
            $name = $commitData[0]  # Assign the name from commit_count.txt if valid
            $commitNum = [int]$commitData[1]
        } else {
            Write-Output "Invalid format in commit_count.txt. Re-initializing..."
            # Clear the file and re-initialize setup
            Clear-Content $commitFile
            # Store the final chosen name into the file
            $chosenName | Out-File -Encoding utf8 $commitFile  # Only store the username
            $commitNum = 1
            $commitNum | Out-File -Append -Encoding utf8 $commitFile
        }
    } else {
        Write-Output "commit_count.txt not a valid format. Re-initializing..."
        # Re-initialize if the format is incorrect
        Clear-Content $commitFile
        $chosenName | Out-File -Encoding utf8 $commitFile  # Only store the username
        $commitNum = 1
        $commitNum | Out-File -Append -Encoding utf8 $commitFile
    }
} else {
    Write-Output "commit_count.txt does not exist. Setting it up..."
    # Set up the file with the chosen name and initial commit count
    $chosenName | Out-File -Encoding utf8 $commitFile  # Only store the username
    $commitNum = 1
    $commitNum | Out-File -Append -Encoding utf8 $commitFile
}

# Assign the chosen name to $name
$name = $chosenName  # Now the $name variable holds the final value

# Increment the commit number for the new commit
$commitNum++

# Save the updated username and commit number back to commit_count.txt
$name | Out-File -Encoding utf8 $commitFile  # Store the final name
$commitNum | Out-File -Append -Encoding utf8 $commitFile

Write-Output "Commit count updated. User: $name - Commit #$commitNum"

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
