$ErrorActionPreference = "Stop"
$pidFile = Join-Path (Split-Path $PSScriptRoot -Parent) "data\server.pid"
if (-not (Test-Path $pidFile)) {
  Write-Output "监控进程没有在运行。"
  exit 0
}
$processId = Get-Content $pidFile
Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
Remove-Item $pidFile -ErrorAction SilentlyContinue
Write-Output "已停止进程 $processId"
