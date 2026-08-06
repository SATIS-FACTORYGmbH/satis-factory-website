param()

Add-Type -AssemblyName System.Drawing

function Resize-ImageTo {
    param(
        [string]$SourcePath,
        [string]$DestPath,
        [int]$MaxDim = 2400,
        [int]$Quality = 82
    )

    $img = [System.Drawing.Image]::FromFile($SourcePath)
    try {
        # EXIF-Rotation (Orientation-Tag 0x0112) anwenden, sonst liegen Handyfotos falsch herum
        if ($img.PropertyIdList -contains 0x0112) {
            $orientation = $img.GetPropertyItem(0x0112).Value[0]
            switch ($orientation) {
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }

        $w = $img.Width
        $h = $img.Height
        $scale = 1.0
        if ($w -gt $MaxDim -or $h -gt $MaxDim) {
            if ($w -ge $h) { $scale = $MaxDim / $w } else { $scale = $MaxDim / $h }
        }
        $newW = [int]([math]::Round($w * $scale))
        $newH = [int]([math]::Round($h * $scale))

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $bmp.SetResolution(72, 72)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.DrawImage($img, 0, 0, $newW, $newH)
        $g.Dispose()

        $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$Quality)

        $destDir = Split-Path $DestPath -Parent
        if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }

        $bmp.Save($DestPath, $jpegCodec, $encParams)
        $bmp.Dispose()
    } finally {
        $img.Dispose()
    }
}

# folderMap: source relative folder(s) -> dest folder + slug prefix
$base = "C:\Claude\Website relaunch\assets\bilder\Neue Website SF"
$destBase = "C:\Claude\Website relaunch\site\img"

$mappings = @(
    @{ Sources = @("Objekteinrichtung", ("B" + [char]0xFC + "ro")); Dest = "objektausbau"; Prefix = "objektausbau" },
    @{ Sources = @("Ladenbau"); Dest = "ladenbau"; Prefix = "ladenbau" },
    @{ Sources = @("Privatkundschaft", ("Privatkundschaft\B" + [char]0xE4 + "der")); Dest = "privater-innenausbau"; Prefix = "wohnen" },
    @{ Sources = @("Werkstatt"); Dest = "werkstatt"; Prefix = "werkstatt" },
    @{ Sources = @("Maschinenpark"); Dest = "werkstatt"; Prefix = "maschine" },
    @{ Sources = @("Mitarbeiter"); Dest = "team"; Prefix = "team" }
)

$manifest = @()

foreach ($m in $mappings) {
    $counter = 1
    foreach ($srcRel in $m.Sources) {
        $srcDir = Join-Path $base $srcRel
        if (-not (Test-Path $srcDir)) { continue }
        $files = Get-ChildItem -Path $srcDir -File | Where-Object { $_.Extension -match '\.(jpg|jpeg|png|JPG|JPEG|PNG)$' }
        foreach ($f in $files) {
            $destName = "{0}-{1:D2}.jpg" -f $m.Prefix, $counter
            $destPath = Join-Path (Join-Path $destBase $m.Dest) $destName
            try {
                Resize-ImageTo -SourcePath $f.FullName -DestPath $destPath
                $manifest += [PSCustomObject]@{ Original = $f.FullName; Dest = $destPath; Category = $m.Dest }
                Write-Output "OK: $($f.Name) -> $destName"
            } catch {
                Write-Output "FEHLER bei $($f.FullName): $_"
            }
            $counter++
        }
    }
}

$manifest | Export-Csv -Path "C:\Claude\Website relaunch\scripts\image-manifest.csv" -NoTypeInformation -Encoding UTF8
Write-Output "FERTIG: $($manifest.Count) Bilder verarbeitet."
