$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$node = "C:\Program Files\nodejs\node.exe"
$git = "C:\Program Files\Git\cmd\git.exe"
$port = 8765
$logPath = Join-Path $root "data\repo-sync.log"
$paths = @(
  "data/daily",
  "data/history.json",
  "data/model-tree.md",
  "data/progress-history.md",
  "data/state.json",
  "data/translations.json",
  "data/release_notes.md"
)

function Write-SyncLog([string]$message) {
  $line = "[{0}] {1}" -f (Get-Date -Format "yyyy-MM-dd HH:mm:ss"), $message
  Add-Content -Path $logPath -Value $line -Encoding utf8
}

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

function Get-SystemProxy {
  $inet = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -ErrorAction SilentlyContinue
  if (-not $inet -or $inet.ProxyEnable -ne 1 -or -not $inet.ProxyServer) { return $null }
  $raw = [string]$inet.ProxyServer
  if ($raw -match "https=([^;]+)") { $raw = $Matches[1] }
  elseif ($raw -match "http=([^;]+)") { $raw = $Matches[1] }
  $raw = $raw.Trim()
  if (-not $raw) { return $null }
  if ($raw -notmatch "^https?://") { $raw = "http://$raw" }
  return $raw
}

function Invoke-Git {
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  $prefix = @("-c", "http.sslBackend=openssl")
  $proxy = Get-SystemProxy
  if ($proxy) { $prefix += @("-c", "http.proxy=$proxy", "-c", "https.proxy=$proxy") }
  & $git @prefix @GitArgs
  if ($LASTEXITCODE -ne 0) { throw "git $($GitArgs -join ' ') failed with exit $LASTEXITCODE" }
}

Set-Location $root
$env:GIT_TERMINAL_PROMPT = "0"

try {
  if (Test-MonitorPort) {
    Invoke-WebRequest -Uri "http://127.0.0.1:$port/api/refresh" -Method POST -UseBasicParsing | Out-Null
    $deadline = (Get-Date).AddMinutes(8)
    do {
      Start-Sleep -Seconds 5
      $state = Invoke-RestMethod -Uri "http://127.0.0.1:$port/api/state" -TimeoutSec 30
      if (-not $state.pending) { break }
    } while ((Get-Date) -lt $deadline)
    if ($state.pending) { Write-SyncLog "refresh still running; committing the snapshot already on disk" }
  } else {
    & $node "$root\src\refresh.js"
    if ($LASTEXITCODE -ne 0) { throw "refresh.js failed with exit $LASTEXITCODE" }
  }

  Invoke-Git add -- @paths
  $staged = & $git diff --cached --name-only
  $extra = @($staged | Where-Object {
    $name = ($_ -replace "\\", "/")
    -not ($paths -contains $name -or $name.StartsWith("data/daily/"))
  })
  if ($extra.Count -gt 0) {
    & $git restore --staged -- @extra
    if ($LASTEXITCODE -ne 0) { throw "git restore --staged failed with exit $LASTEXITCODE" }
  }

  $previousErrorAction = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  & $git diff --cached --quiet
  $diffCode = $LASTEXITCODE
  $ErrorActionPreference = $previousErrorAction
  if ($diffCode -eq 0) {
    Write-SyncLog "no snapshot changes"
    exit 0
  }

  $day = Get-Date -Format "yyyy-MM-dd"
  Invoke-Git commit -m "Update the morning monitor snapshot for $day."
  Invoke-Git push origin HEAD
  $sha = & $git rev-parse --short HEAD
  Write-SyncLog "pushed $sha"
} catch {
  Write-SyncLog ("failed: " + $_.Exception.Message)
  exit 1
}
