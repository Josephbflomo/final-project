Add-Type -AssemblyName System.Drawing

$icon = New-Object System.Drawing.Bitmap 1024,1024
$g = [System.Drawing.Graphics]::FromImage($icon)
$g.Clear([System.Drawing.Color]::FromArgb(220,40,40))
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillRectangle($brush, 420, 200, 184, 624)
$g.FillRectangle($brush, 200, 420, 624, 184)
$font = New-Object System.Drawing.Font('Arial',120,[System.Drawing.FontStyle]::Bold)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$g.DrawString('EMS', $font, $brush, [System.Drawing.RectangleF]::new(0,760,1024,200), $format)
$icon.Save('.\assets\icon.png',[System.Drawing.Imaging.ImageFormat]::Png)

$splash = New-Object System.Drawing.Bitmap 1200,800
$g2 = [System.Drawing.Graphics]::FromImage($splash)
$g2.Clear([System.Drawing.Color]::FromArgb(30,30,70))
$brush2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220,40,40))
$g2.FillEllipse($brush2, 400, 100, 400, 400)
$g2.FillRectangle($brush, 560, 200, 80, 320)
$g2.FillRectangle($brush, 460, 300, 280, 80)
$font2 = New-Object System.Drawing.Font('Arial',60,[System.Drawing.FontStyle]::Bold)
$g2.DrawString('Emergency Response', $font2, $brush, [System.Drawing.RectangleF]::new(0,520,1200,200), $format)
$splash.Save('.\assets\splash.png',[System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$g2.Dispose()
$icon.Dispose()
$splash.Dispose()
