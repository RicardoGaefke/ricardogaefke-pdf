using System;
using System.Drawing;
using QRCoder;

namespace RicardoGaefke.QrCode
{
  public class Code : ICode
  {
    public Bitmap GetImage(string link)
    {
      Bitmap _return = null;

      using (QRCodeGenerator qrGenerator = new QRCodeGenerator())
      {
        using (QRCodeData qrCodeData = qrGenerator.CreateQrCode(new Uri(link).ToString(), QRCodeGenerator.ECCLevel.Q))
        {
          using (QRCode qrCode = new QRCode(qrCodeData))
          {
            _return = qrCode.GetGraphic(10);
          }
        }
      }

      return _return;
    }
  }
}
