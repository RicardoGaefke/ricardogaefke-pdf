using Azure.Storage.Blobs.Models;
using RicardoGaefke.Domain;

namespace RicardoGaefke.Storage
{
  public interface IBlob
  {
    void SaveBase64(Image data);
    void Save(Image data);
    bool Exists(string file);
    BlobDownloadInfo Download(string file);
  }
}
