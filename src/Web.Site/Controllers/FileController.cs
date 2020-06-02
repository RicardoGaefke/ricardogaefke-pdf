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
    public FileController(ILogger<FileController> logger)
    {
      _logger = logger;
    }

    [HttpPost("SendData")]
    public ActionResult<BasicReturn> ReceiveData(Form data)
    {
      BasicReturn _return = new BasicReturn();

      try
      {
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
