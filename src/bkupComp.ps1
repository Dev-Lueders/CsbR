#Defining sources and Destination
$sourceFolder ="components"
$destinationFolder =" backup_components"

#ensures the folder exsists
if (Test-Path $sourceFolder) {
    #The logic checking if the soruce folder is there if not make one.
    if (!(test-Path $destinationFolder)) {
            New-Item -ItemType Directory -Path $destinationFolder | Out-Null
    }
    
    #copy the components folder to the destination
    Copy-Item -Path $sourceFolder -destination $ destinationFolder -Recurse -Force
    Write-Host "Components folder copied successfully to" 

}