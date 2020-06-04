using System;
using System.Drawing;
using System.Globalization;
using System.IO;
using iText.IO.Font.Constants;
using iText.IO.Image;
using iText.Kernel.Colors;
using iText.Kernel.Font;
using iText.Kernel.Geom;
using iText.Kernel.Pdf;
using iText.Kernel.Pdf.Action;
using iText.Layout;
using iText.Layout.Borders;
using iText.Layout.Element;
using iText.Layout.Properties;
using RicardoGaefke.Domain;
using RicardoGaefke.QrCode;

namespace RicardoGaefke.Pdf
{
  public class MyPdf : IMyPdf
  {

    private iText.Kernel.Colors.Color AnswerColor(string answer)
    {
      switch (answer)
      {
        case "1":
          return ColorConstants.RED;
        case "2":
          return ColorConstants.GREEN;
        case "3":
          return ColorConstants.BLUE;
        default:
          return ColorConstants.BLACK;
      }
    }
    private void AddFooter(Document doc, PdfDocument pdfDoc, string text, string guid)
    {
      Paragraph footer = new Paragraph($"{text} ")
        .SetFont(PdfFontFactory.CreateFont(StandardFonts.HELVETICA_BOLD))
        .SetFontSize(8)
        .SetBorderTop(new SolidBorder(ColorConstants.LIGHT_GRAY, 1))
        .SetWidth(539)
      ;

      Link link = new Link($"https://pdf.ricardogaefke.com/check/{guid}", PdfAction.CreateURI($"https://pdf.ricardogaefke.com/check/{guid}"));

      footer.Add(link);

      for (int i = 1; i <= pdfDoc.GetNumberOfPages(); i++)
      {
        iText.Kernel.Geom.Rectangle pageSize = pdfDoc.GetPage(i).GetPageSize();
        float x = pageSize.GetWidth() / 2;
        float y = pageSize.GetBottom() + 25;
        doc.ShowTextAligned(footer, x, y, i, TextAlignment.CENTER, VerticalAlignment.BOTTOM, 0);
      }
    }

    private void AddHeader(Document doc, PdfDocument pdfDoc)
    {
      Paragraph header = new Paragraph("Example of PDF report by Ricardo Gaefke")
        .SetFont(PdfFontFactory.CreateFont(StandardFonts.HELVETICA_BOLD))
        .SetFontColor(ColorConstants.GRAY)
        .SetFontSize(8)
        .SetBorderBottom(new SolidBorder(ColorConstants.LIGHT_GRAY, 1))
        .SetWidth(539)
      ;

      for (int i = 1; i <= pdfDoc.GetNumberOfPages(); i++)
      {
        iText.Kernel.Geom.Rectangle pageSize = pdfDoc.GetPage(i).GetPageSize();
        float x = pageSize.GetWidth() / 2;
        float y = pageSize.GetTop() - 30;
        doc.ShowTextAligned(header, x, y, i, TextAlignment.CENTER, VerticalAlignment.BOTTOM, 0);
      }
    }

    private void AddTitle(Document doc, string title, string cert, string year)
    {
      Paragraph paragraph = new Paragraph()
        .SetFontSize(24)
        .SetBold()
        .SetTextAlignment(TextAlignment.CENTER)
        .SetMarginTop(10)
        .SetMarginBottom(50)
      ;

      paragraph.Add(new Text($"{title} "));
      paragraph.Add(
        new Text(cert)
        .SetFontColor(ColorConstants.RED)
      );
      paragraph.Add(
        new Text($"/{year}")
        .SetFontColor(ColorConstants.BLACK)
      );

      doc.Add(paragraph);
    }

    private void AddResult(Document doc, string result, iText.Kernel.Colors.Color color)
    {
      Paragraph pQuestion = new Paragraph()
        .SetFontSize(30)
        .SetBold()
        .SetTextAlignment(TextAlignment.RIGHT)
        .SetMarginTop(5)
        .SetMarginBottom(5)
        .SetFontColor(color)
      ;
      pQuestion.Add(result);
      doc.Add(pQuestion);
    }

    private void AddQuestion(Document doc, string question, string answer, string number, string option)
    {
      Paragraph pQuestion = new Paragraph()
        .SetFontSize(12)
        .SetBold()
        .SetTextAlignment(TextAlignment.JUSTIFIED)
        .SetMarginTop(10)
        .SetMarginBottom(5)
      ;

      pQuestion.Add(
        new Text($"{number}. ")
        .SetFontColor(ColorConstants.BLUE)
      );

      pQuestion.Add(
        new Text(question)
        .SetFontColor(ColorConstants.BLACK)
      );

      Paragraph pAnswer = new Paragraph()
        .SetFontSize(12)
        .SetTextAlignment(TextAlignment.JUSTIFIED)
        .SetMarginBottom(20)
        .SetMarginLeft(20)
      ;

      pAnswer.Add(
        new Text($"{answer}: ")
      );

      pAnswer.Add(
        new Text(option)
        .SetFontColor(AnswerColor(option))
        .SetBold()
      );

      pAnswer.Add(
        new Text("!")
        .SetFontColor(ColorConstants.BLACK)
      );

      doc.Add(pQuestion);
      doc.Add(pAnswer);
    }

    private Paragraph SignatureParagraph()
    {
      return new Paragraph()
        .SetFontSize(11)
        .SetTextAlignment(TextAlignment.CENTER)
        .SetMarginLeft(150)
      ;
    }

    private iText.Layout.Element.Image QrCode(string code)
    {
      ICode qrCode = new Code();

      Bitmap image = qrCode.GetImage($"https://pdf.ricardogaefke.com/check/{code}");

      MemoryStream ms = new MemoryStream();
      image.Save(ms, System.Drawing.Imaging.ImageFormat.Bmp);

      ImageData imageData = ImageDataFactory.Create(ms.ToArray());
      ms.Close();

      iText.Layout.Element.Image finalImage = new iText.Layout.Element.Image(imageData);
      finalImage.SetWidth(50);

      return finalImage;
    }

    private void AddSignature(Document doc, string name, string email, string signature, DateTime date, CultureInfo culture, string code)
    {
      Paragraph pName = SignatureParagraph();
      pName
        .SetBorderTop(new SolidBorder(ColorConstants.LIGHT_GRAY, 1))
        .SetMarginTop(50)
      ;

      pName.Add(
        new Text($"{signature} ")
      );

      pName.Add(
        new Text(name)
        .SetBold()
      );

      Paragraph pEmail = SignatureParagraph()
        .SetMarginTop(-5)
      ;

      pEmail.Add(
        new Text($"<{email}>")
      );

      Paragraph pDate = SignatureParagraph()
        .SetMarginTop(-5)
      ;

      pDate.Add(date.ToString("D", culture));

      Paragraph pCode = SignatureParagraph()
       .SetMarginTop(-5)
      ;

      pCode.Add(QrCode(code));

      doc.Add(pName);
      doc.Add(pEmail);
      doc.Add(pDate);
      doc.Add(pCode);
    }

    private void AddInfo(Document doc, string info)
    {
      Paragraph paragraph = new Paragraph()
        .SetFontSize(12)
        .SetTextAlignment(TextAlignment.JUSTIFIED)
        .SetMarginTop(10)
        .SetMarginBottom(10)
      ;

      paragraph.Add(
        new Text("INFO: ")
        .SetBold()
      );

      paragraph.Add(
        new Text(info)
      );

      if (!string.IsNullOrEmpty(info))
      {
        doc.Add(paragraph);
      }
    }

    public byte[] CreateEnglish(Form info)
    {
      byte[] ba;

      using (MemoryStream ms = new MemoryStream())
      {
        PdfWriter writer = new PdfWriter(ms);
        PdfDocument pdf = new PdfDocument(writer);
        using (var doc = new Document(pdf, PageSize.A4))
        {
          doc.SetMargins(30, 30, 10, 30);

          IText English = new Texts.English();

          /// content
          AddTitle(doc, English.Title(), info.Guid.Substring(0, 8), info.When.Year.ToString());
          AddQuestion(doc, English.Question(), English.Answer(), "1", info.Question1);
          AddQuestion(doc, English.Question(), English.Answer(), "2", info.Question2);
          AddQuestion(doc, English.Question(), English.Answer(), "3", info.Question3);
          AddQuestion(doc, English.Question(), English.Answer(), "4", info.Question4);
          AddQuestion(doc, English.Question(), English.Answer(), "5", info.Question5);
          AddInfo(doc, info.Info);
          AddResult(
            doc,
            (info.Approved) ? English.Approved() : English.Disapproved(),
            (info.Approved) ? ColorConstants.BLUE : ColorConstants.RED
            );
          AddSignature(doc, info.Name, info.Email, English.Signature(), info.When, CultureInfo.CreateSpecificCulture("en-US"), info.Guid);

          /// header and footer
          AddFooter(doc, pdf, English.Footer(), info.Guid);
          AddHeader(doc, pdf);

          doc.Close();
        }
        ba = ms.ToArray();
      }

      return ba;
    }

    public byte[] CreatePortuguese(Form info)
    {
      byte[] ba;

      using (MemoryStream ms = new MemoryStream())
      {
        PdfWriter writer = new PdfWriter(ms);
        PdfDocument pdf = new PdfDocument(writer);
        using (var doc = new Document(pdf, PageSize.A4))
        {
          doc.SetMargins(30, 30, 10, 30);

          IText Portuguese = new Texts.Portuguese();

          /// content
          AddTitle(doc, Portuguese.Title(), info.Guid.Substring(0, 8), info.When.Year.ToString());
          AddQuestion(doc, Portuguese.Question(), Portuguese.Answer(), "1", info.Question1);
          AddQuestion(doc, Portuguese.Question(), Portuguese.Answer(), "2", info.Question2);
          AddQuestion(doc, Portuguese.Question(), Portuguese.Answer(), "3", info.Question3);
          AddQuestion(doc, Portuguese.Question(), Portuguese.Answer(), "4", info.Question4);
          AddQuestion(doc, Portuguese.Question(), Portuguese.Answer(), "5", info.Question5);
          AddInfo(doc, info.Info);
          AddResult(
            doc,
            (info.Approved) ? Portuguese.Approved() : Portuguese.Disapproved(),
            (info.Approved) ? ColorConstants.BLUE : ColorConstants.RED
            );
          AddSignature(doc, info.Name, info.Email, Portuguese.Signature(), info.When, CultureInfo.CreateSpecificCulture("pt-BR"), info.Guid);

          /// header and footer
          AddFooter(doc, pdf, Portuguese.Footer(), info.Guid);
          AddHeader(doc, pdf);

          doc.Close();
        }
        ba = ms.ToArray();
      }

      return ba;
    }
  }
}
