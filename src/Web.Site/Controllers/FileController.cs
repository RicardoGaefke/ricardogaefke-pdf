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
    private readonly IMyPdf _myPdf;
    private readonly IQueue _queue;
    public FileController(ILogger<FileController> logger, IMyPdf myPdf, IQueue queue)
    {
      _logger = logger;
      _myPdf = myPdf;
      _queue = queue;
    }

    [HttpPost("SendData")]
    public ActionResult<BasicReturn> ReceiveData(Form data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
        Form myForm = new Form(data.Question1, data.Question2, data.Question3, data.Question4, data.Question5, data.Approved, data.Info, data.Name, data.Email);

        Form form = _myPdf.Insert(myForm);

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
  }
}
