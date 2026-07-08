Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot/..

$tiFiles = git ls-files -z 'public/images/' | ForEach-Object { $_ -split "`0" } | Where-Object { $_ -match '\(TI\)/' }

foreach ($file in @($tiFiles)) {
  if (-not $file) { continue }
  $name = Split-Path -Leaf $file
  git mv -- $file "public/images/departments/TI/$name"
  if ($LASTEXITCODE -ne 0) { throw "git mv failed: $file" }
  Write-Host "Moved $file"
}
