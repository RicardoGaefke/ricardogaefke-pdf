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

    public async Task ProcessQueueMessageWebJobPdf
    (
      [QueueTrigger("%queueName%")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      Form info = _info.GetFileInfo(Convert.ToInt32(message));

      Image pdfEnglish = new Image($"{info.Guid}-eng.pdf", "application/pdf", _pdf.CreateEnglish(info));

      _blob.Save(pdfEnglish);

      if (info.Portuguese)
      {
        Image pdfPortuguese = new Image($"{info.Guid}-pt.pdf", "application/pdf", _pdf.CreatePortuguese(info));

        _blob.Save(pdfPortuguese);
      }

      string SGMsg = await _email.SendSuccessMessage(info);

      _info.UpdateFileInfo(Convert.ToInt32(message), true, DequeueCount, SGMsg);
    }

    public async Task ProcessQueueMessageWebJobPdfPoison
    (
      [QueueTrigger("webjob-pdf-poison")]
      string message,
      int DequeueCount,
      ILogger logger
    )
    {
      Form info = _info.GetFileInfo(Convert.ToInt32(message));
      Form mailMsg = new Form(info.Name, info.Email);
      string SGMsg = await _email.SendErrorMessage(mailMsg);
      _info.UpdateFileInfo(Convert.ToInt32(message), false, DequeueCount, SGMsg);
    }
  }
}
