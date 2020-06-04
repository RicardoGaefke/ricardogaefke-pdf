using Azure.Storage.Blobs.Models;
using RicardoGaefke.Domain;

namespace RicardoGaefke.Storage
{
  public interface IBlob
  {
    public void SaveBase64(Image data);
    public void Save(Image data);
    public BlobDownloadInfo Download(string file);
  }
}
