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
    private readonly IInfo _info;
    private readonly IMyPdf _pdf;
    private readonly IBlob _blob;
    private readonly IMyEmail _email;

    public Functions(
      IOptions<Secrets.ConnectionStrings> connStr,
      IInfo info,
      IMyPdf myPdf,
      IBlob blob,
      IMyEmail myEmail
    )
    {
      _connStr = connStr;
      _info = info;
      _pdf = myPdf;
      _blob = blob;
      _email = myEmail;
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

      Image pdf = new Image($"{info.Guid}-eng.pdf", "application/pdf", _pdf.CreateEnglish(info));
      _blob.Save(pdf);
      // using (FileStream file = new FileStream($"out/{info.Guid}.pdf", FileMode.Create, FileAccess.Write))
      // {
      //   file.Write(pdf.ByteArray, 0, pdf.ByteArray.Length);
      // }
    }
  }
}
