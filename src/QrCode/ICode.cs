using System.Drawing;

namespace RicardoGaefke.QrCode
{
  public interface ICode
  {
    Bitmap GetImage(string link);
  }
}
