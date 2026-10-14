$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$node = "C:\Program Files\nodejs\node.exe"
$port = 8765
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

function Test-MonitorPort {
  try {
    $client = New-Object System.Net.Sockets.TcpClient
    $client.Connect("127.0.0.1", $port)
    $client.Close()
    return $true
  } catch {
    return $false
  }
}

if (-not (Test-MonitorPort)) {
  Start-Process -FilePath $node -ArgumentList "`"$root\src\server.js`"" -WorkingDirectory $root -WindowStyle Hidden
  $deadline = (Get-Date).AddSeconds(25)
  while (-not (Test-MonitorPort) -and (Get-Date) -lt $deadline) {
    Start-Sleep -Milliseconds 300
  }
}

if (Test-Path $edge) {
  Start-Process -FilePath $edge -ArgumentList "--app=http://127.0.0.1:$port/#today","--window-size=1440,900"
} else {
  Start-Process "http://127.0.0.1:$port/#today"
}
