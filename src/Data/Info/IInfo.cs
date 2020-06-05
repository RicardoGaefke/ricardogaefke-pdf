using RicardoGaefke.Domain;

namespace RicardoGaefke.Data
{
  public interface IInfo
  {
    Form Insert(Form data);
    Form GetFileInfo(int id);
    void UpdateFileInfo(int id, bool success, int dequeue, string message);
    void RegisterError(string message, string stack, string token);
  }
}
