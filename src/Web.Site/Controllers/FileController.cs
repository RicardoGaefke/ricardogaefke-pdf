using System.IO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RicardoGaefke.Domain;
using RicardoGaefke.Data;
using RicardoGaefke.Storage;

namespace RicardoGaefke.Web.Site
{
  [Route("api/")]
  [ApiController]
  public class FileController : ControllerBase
  {
    private readonly ILogger<FileController> _logger;
    private readonly IInfo _info;
    private readonly IQueue _queue;
    private readonly IBlob _blob;
    public FileController(ILogger<FileController> logger, IInfo info, IQueue queue, IBlob blob)
    {
      _logger = logger;
      _info = info;
      _queue = queue;
      _blob = blob;
    }

    [HttpPost("SendData")]
    public ActionResult<BasicReturn> ReceiveData(Form data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Form myForm = new Form(
          data.Question1,
          data.Question2,
          data.Question3,
          data.Question4,
          data.Question5,
          data.Approved,
          data.English,
          data.Portuguese,
          data.Info,
          data.Name,
          data.Email
        );

        Form form = _info.Insert(myForm);

        _queue.SaveMessage("webjob-pdf", form.Id.ToString());

        _return.Success = true;
      }
      catch (DomainException ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Code = "Domain";
      }
      catch (System.Exception ex)
      {
        _return.Success = false;
        _return.Message = ex.Message;
        _return.Details = ex.StackTrace;
      }

      return _return;
    }

    [AllowAnonymous]
    [ResponseCache(Duration = 120, Location = ResponseCacheLocation.Client)]
    [HttpGet("show/{file}/{language}/report.pdf")]
    public object Show(string file, string language)
    {
      string fileName = $"{file}-{language}.pdf";

      if(!_blob.Exists(fileName))
      {
        throw new FileNotFoundException("Blob not found!", fileName);
      }

      return File(_blob.Download($"{file}-{language}.pdf").Content, "application/pdf");
    }
  }
}
