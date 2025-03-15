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
$commitMessage = "Auto Commit #$commitNum - $timestamp"


# adding to git 
git add .
git commit -m $commitMessage
git push origin main	#need to work on auto changing main

Write -Output "Committed with message: $commitMessage"




