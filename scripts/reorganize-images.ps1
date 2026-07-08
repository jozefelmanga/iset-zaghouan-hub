Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot/..

function Move-GitFile {
  param([string]$From, [string]$To)
  git mv -- $From $To
  if ($LASTEXITCODE -ne 0) { throw "git mv failed: $From -> $To" }
}

$tracked = git ls-files 'public/images/'
$tiFiles = $tracked | Where-Object { $_ -match 'Technologies de l.informatique \(TI\)/' }
$segFiles = $tracked | Where-Object { $_ -match 'Sciences .conomiques et de gestion \(SEG\)/' }
$gprFiles = $tracked | Where-Object { $_ -match 'G.nie des Proc.d.s \(GPR\)/' }

foreach ($file in $tiFiles) {
  $name = Split-Path -Leaf $file
  Move-GitFile $file "public/images/departments/TI/$name"
}

foreach ($file in $segFiles) {
  $name = Split-Path -Leaf $file
  Move-GitFile $file "public/images/departments/SEG/$name"
}

foreach ($file in $gprFiles) {
  $name = Split-Path -Leaf $file
  Move-GitFile $file "public/images/departments/GPR/$name"
}

Move-GitFile 'public/images/departments/new paths/TI_path.webp' 'public/images/departments/TI/TI_path.webp'
Move-GitFile 'public/images/departments/new paths/SEG_path.webp' 'public/images/departments/SEG/SEG_path.webp'
Move-GitFile 'public/images/departments/new paths/GPR_path.webp' 'public/images/departments/GPR/GPR_path.webp'

Write-Host "Moved $($tiFiles.Count) TI, $($segFiles.Count) SEG, $($gprFiles.Count) GPR files."
