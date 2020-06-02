using System.Diagnostics;
using System.Text.Json;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;
using RicardoGaefke.Web.Site.Models;

namespace RicardoGaefke.Web.Site.Controllers
{
  public class HomeController : Controller
  {
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
      _logger = logger;
    }

    public IActionResult Index()
    {
      ViewData["Title"] = "RicardoGaefke - PDF WebJobs example";

      Request.HttpContext.Response.Headers.Add("Title", "RicardoGaefke - PDF WebJobs example");
      Request.HttpContext.Response.Headers.Add("Description", "RicardoGaefke - PDF WebJobs example");

      var consentFeature = Request.HttpContext.Features.Get<ITrackingConsentFeature>();
      var showBanner = !consentFeature?.CanTrack ?? false;

      _logger.LogInformation(showBanner.ToString());

      ViewBag.Page = JsonSerializer.Serialize(new
      {
        Title = "RicardoGaefke - PDF WebJobs example",
        Description = "RicardoGaefke - PDF WebJobs example",
        IsAuthenticated = false,
        Name = "",
        Email = "",
        Language = "ENG",
        Theme = "light",
        Drawer = false,
        Config = false
      });

      return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
