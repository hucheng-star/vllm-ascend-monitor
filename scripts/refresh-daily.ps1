$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$node = "C:\Program Files\nodejs\node.exe"
$port = 8765

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

if (Test-MonitorPort) {
  Invoke-WebRequest -Uri "http://127.0.0.1:$port/api/refresh" -Method POST -UseBasicParsing | Out-Null
  exit 0
}

& $node "$root\src\refresh.js"
