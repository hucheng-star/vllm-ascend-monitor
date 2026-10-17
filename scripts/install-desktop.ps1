$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$desktop = [Environment]::GetFolderPath("Desktop")
$startup = [Environment]::GetFolderPath("Startup")
$openScript = Join-Path $PSScriptRoot "open-dashboard.ps1"
$dailyScript = Join-Path $PSScriptRoot "refresh-daily.ps1"
$publishScript = Join-Path $PSScriptRoot "publish-snapshot.ps1"

function New-MonitorShortcut([string]$folder, [string]$name) {
  $path = Join-Path $folder $name
  $shell = New-Object -ComObject WScript.Shell
  $shortcut = $shell.CreateShortcut($path)
  $shortcut.TargetPath = "powershell.exe"
  $shortcut.Arguments = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$openScript`""
  $shortcut.WorkingDirectory = $root
  $shortcut.WindowStyle = 7
  $shortcut.Description = "打开 vLLM-Ascend 社区监控"
  $shortcut.Save()
  return $path
}

$desktopLink = New-MonitorShortcut $desktop "vLLM-Ascend 社区监控.lnk"
$startupLink = New-MonitorShortcut $startup "vLLM-Ascend 社区监控.lnk"

$taskName = "vLLM-Ascend Monitor Daily"
$action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$dailyScript`""
$trigger = New-ScheduledTaskTrigger -Daily -At 8:30am
Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Force | Out-Null

$publishTask = "vLLM-Ascend Monitor Publish"
$publishAction = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$publishScript`"" -WorkingDirectory $root
$publishTrigger = New-ScheduledTaskTrigger -Daily -At 7:00am
$publishSettings = New-ScheduledTaskSettingsSet -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$publishPrincipal = New-ScheduledTaskPrincipal -UserId "$env:USERDOMAIN\$env:USERNAME" -LogonType Interactive -RunLevel Limited
Register-ScheduledTask -TaskName $publishTask -Action $publishAction -Trigger $publishTrigger -Settings $publishSettings -Principal $publishPrincipal -Force | Out-Null

Write-Output "DESKTOP=$desktopLink"
Write-Output "STARTUP=$startupLink"
Write-Output "TASK=$taskName"
Write-Output "PUBLISH=$publishTask"
