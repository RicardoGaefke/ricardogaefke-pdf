using System;
using System.Collections;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using RicardoGaefke.Domain;
using RicardoGaefke.Storage;

namespace RicardoGaefke.Email
{
  public class MyEmail : IMyEmail
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connectionStrings;
    private readonly IBlob _blob;

    public MyEmail(IOptions<Secrets.ConnectionStrings> ConnectionStrings,
      IBlob Blob)
    {
      _connectionStrings = ConnectionStrings;
      _blob = Blob;
    }

    private SendGridMessage message(string subject, string plainTextContent, string htmlContent)
    {
      return new SendGridMessage()
      {
        From = new EmailAddress("donotreply@ricardogaefke.com", "Ricardo Gaefke"),
        Subject = subject,
        PlainTextContent = plainTextContent,
        HtmlContent = htmlContent
      };
    }

    private void AddAttach(SendGridMessage msg, string fileName)
    {
      using (var ms = new MemoryStream())
      {
        _blob.Download(fileName).Content.CopyTo(ms);
        msg.AddAttachment(fileName, Convert.ToBase64String(ms.ToArray()));
      }
    }

    public async Task<string> SendSuccessMessage(Form data)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = message(
        "Success! Your PDF Report is here",
        "Success! Your report was created by Ricardo Gaefke's PDF WebJob.",
        "<strong>Success! Your PDF report was created by <a href=\"http://pdf.ricardogaefke.com\">Ricardo Gaefke's PDF WebJob</a>.</strong>"
      );

      msg.AddTo(new EmailAddress(data.Email, data.Name));

      if (data.Email != "ricardogaefke@gmail.com")
      {
        msg.AddBcc(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      }

      AddAttach(msg, $"{data.Guid}-eng.pdf");

      if (data.Portuguese)
      {
        AddAttach(msg, $"{data.Guid}-pt.pdf");
      }

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }

    public async Task<string> SendErrorMessage(Form data)
    {
      SendGridClient client = new SendGridClient(_connectionStrings.Value.SendGrid);

      var msg = message(
        "Failed! Your PDF report",
        "Failed! Your PDF report was NOT created by Ricardo Gaefke's PDF WebJob.",
        $"<strong>Failed! Your PDF report was NOT created by <a href=\"http://pdf.ricardogaefke.com\">Ricardo Gaefke's PDF WebJob</a>.</strong>"
      );

      msg.AddTo(new EmailAddress(data.Email, data.Name));

      if (data.Email != "ricardogaefke@gmail.com")
      {
        msg.AddBcc(new EmailAddress("ricardogaefke@gmail.com", "Ricardo Gaefke"));
      }

      Response response = await client.SendEmailAsync(msg);

      return response.Headers.GetValues("x-message-id").FirstOrDefault();
    }
  }
}
