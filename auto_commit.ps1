# Auto Location
	$repoPath = Get-Location 

#changes directory to installed location
	cd $repoPath

#counts the commits
	$commitFile = "commit_count.txt"

# seeing how many commit files there are. If not start @ 1
	if( Test-Path $commitFile) {
		$commitNum = [int](Get-Content $commitFile) + 1
	} else {
		$commitNum = 1
	}

# new commmit number added
	$commitNum | Out-File $commitFile

# time stamp
	$timestamp = Get-Date -Format "dd_HH-mm_MM-yyyy"


#enter your own comment
	$customComment = Read-Host "Enter commit message"


#make commit
	$commitMessage = "#$commitNum - $customComment - $timestamp"

#no comment, no problem
	if ($customComment) {
	$customMessage += " - $customComment"
	}

# Getting current branch
	$currentBranch = git ref-parse --abbrev-rev HEAD

# adding to git 

	git add .

	git commit -m "$commitMessage"
	
	git push origin $currentBranch	

	Write -Output "Committed with message: $commitMessage"




