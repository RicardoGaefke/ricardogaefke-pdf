namespace RicardoGaefke.Pdf
{
  public interface IText
  {
    string Title();
    string Question();
    string Answer();
    string Footer();
    string Signature();
    string Approved();
    string Disapproved();
  }
}
