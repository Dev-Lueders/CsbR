# Path to the commit_count.txt file
$commitFile = "commit_count.txt"

function SetUpUserName {
    $gitHubName = git config user.name
    $windowsName = $env:USERNAME

    Write-Output "Choose a name to store in commit_count.txt:"
    Write-Output "1) GitHub Username: $gitHubName"
    Write-Output "2) Windows Username: $windowsName"
    Write-Output "3) Type in Your Initials:"

    # Prompt user to select an option
    $choice = Read-Host "Enter 1 for GitHub or 2 for Windows or 3 to Your initials:"

    # Set the choice to a variable (assume $choice is set from user input or earlier in the script)

    $finalChoice = ""

    if ($choice -eq "1" -and $gitHubName) {

        $finalChoice = $gitHubName  # Set $finalChoice to GitHub username

    } elseif ($choice -eq "2") {

        $finalChoice = $windowsName  # Set $finalChoice to Windows username

    } elseif ($choice -eq "3") {

        $initials = Read-Host "Enter your initials"
        $finalChoice = $initials  # Set $finalChoice to user-entered initials

    } else {

        $finalChoice = $windowsName  # Default to Windows username if invalid choice
    }

    # Return the final choice
	Write-Ouptut $finalChoice
    return $finalChoice
}

#-----------FUNCTION ABOVE--------------------------

# Check if the file exists
if (Test-Path $commitFile) {

    # Get the content of the file
  
  $commitData = Get-Content $commitFile
    

    # Check if the file has exactly two lines

    if ($commitData.Count -eq 2) {

        $name = $commitData[0]
	$commitNum = [int]$commitData[1]
	Write-Output $name
	Write-Output $commitNum
	$commitNum++

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



	Write-Output "commits incremented to $commitNum"
	$commitData[1] = $commitNum.ToString()
	Set-Content -Path $commitFile -Value ($commitData -join "`r`n") -Encoding utf8




    } else {

        Write-Output "commit_count.txt does not have exactly two lines."


    }
} else {

$fileSetup = SetUpUserName

Out-File -FilePath $commitFile -Encoding utf8 -InputObject $fileSetup

# Define the file path
$filePath = "commit_count.txt"

# Read all lines from the file
$fileContent = Get-Content $filePath

# Ensure the file has at least 4 lines before modifying
if ($fileContent.Count -gt 3) {

    # Keep only lines from index 3 (4th line) onward
    $fileContent[4..($fileContent.Count - 1)] | Set-Content $filePath
    "1" | Out-File -FilePath $commitFile -Encoding utf8 -Append
	

} else {
    Write-Host "File does not have more than 3 lines. No changes made."
}


  


}
