using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using System;
using System.IO;
using Microsoft.Extensions.Options;
using RicardoGaefke.Domain;

namespace RicardoGaefke.Storage
{
  public class Blob : IBlob
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Blob(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    private CloudBlobContainer MyContainer()
    {
      CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(_connStr.Value.Storage);
      CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
      CloudBlobContainer container = cloudBlobClient.GetContainerReference("webjob-pdf");
      container.CreateIfNotExists();

      return container;
    }
    public void SaveBase64(Image data)
    {
      CloudBlobContainer container = MyContainer();
      CloudBlockBlob blob = container.GetBlockBlobReference(data.Name);

      byte[] file = Convert.FromBase64String(data.Data.Substring(data.Data.IndexOf(",") + 1));
      blob.Properties.ContentType = data.Mime;
      blob.UploadFromByteArray(file, 0, file.Length);
    }

    public void Save(Image data)
    {
      CloudBlobContainer container = MyContainer();
      CloudBlockBlob blob = container.GetBlockBlobReference(data.Name);
      blob.Properties.ContentType = data.Mime;
      blob.UploadFromByteArray(data.ByteArray, 0, data.ByteArray.Length);
    }

    public bool Exists(string file)
    {
      CloudBlobContainer container = MyContainer();
      CloudBlockBlob blob = container.GetBlockBlobReference(file);
      return blob.Exists();
    }

    public BlobDownloadInfo Download(string file)
    {
      BlobServiceClient blobServiceClient = new BlobServiceClient(_connStr.Value.Storage);
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("webjob-pdf");
      BlobClient blobClient = containerClient.GetBlobClient(file);

      return blobClient.Download();
    }
  }
}
