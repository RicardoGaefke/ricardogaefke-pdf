using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RicardoGaefke.Data;
using RicardoGaefke.Domain;
using RicardoGaefke.Email;
using RicardoGaefke.Pdf;
using RicardoGaefke.Storage;
using RicardoGaefke.WebJob.Pdf.Filters;

namespace RicardoGaefke.WebJob.Pdf
{
  [ErrorHandler]
  public class Functions
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;
    private readonly IOptions<Secrets.Config> _config;
    private readonly IInfo _info;
    private readonly IMyPdf _pdf;
    private readonly IBlob _blob;
    private readonly IMyEmail _email;

    public Functions(
      IOptions<Secrets.ConnectionStrings> connStr,
      IOptions<Secrets.Config> config,
      IInfo info,
      IMyPdf myPdf,
      IBlob blob,
      IMyEmail myEmail
    )
    {
      _connStr = connStr;
      _config = config;
      _info = info;
      _pdf = myPdf;
      _blob = blob;
      _email = myEmail;
    }

    private void SaveFile(Image pdfFile)
    {
      if (_config.Value.ASPNETCORE_ENVIRONMENT == "Development")
      {
        if (!Directory.Exists("outpdf/"))
        {
          Directory.CreateDirectory("outpdf/");
        }

        using (FileStream file = new FileStream($"outpdf/{pdfFile.Name}", FileMode.Create, FileAccess.Write))
        {
          file.Write(pdfFile.ByteArray, 0, pdfFile.ByteArray.Length);
        }
      }
      else
      {
        _blob.Save(pdfFile);
      }
    }

    public async Task ProcessQueueMessageWebJobXml
    (
      [QueueTrigger("webjob-pdf")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      Form info = _info.GetFileInfo(Convert.ToInt32(message));

      Image pdfEnglish = new Image($"{info.Guid}-eng.pdf", "application/pdf", _pdf.CreateEnglish(info));

      SaveFile(pdfEnglish);

      if (info.Portuguese)
      {
        Image pdfPortuguese = new Image($"{info.Guid}-pt.pdf", "application/pdf", _pdf.CreatePortuguese(info));

        SaveFile(pdfPortuguese);
      }


    }
  }
}
