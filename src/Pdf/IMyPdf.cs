using RicardoGaefke.Domain;

namespace RicardoGaefke.Pdf
{
  public interface IMyPdf
  {
    byte[] CreateEnglish(Form info);
    byte[] CreatePortuguese(Form info);
  }
}
