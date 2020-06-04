using System;
using System.IO;
using iText.IO.Font.Constants;
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

namespace RicardoGaefke.Pdf
{
  public class MyPdf : IMyPdf
  {
    private void AddFooter(Document doc, PdfDocument pdfDoc)
    {
      Paragraph footer = new Paragraph("PDF report by ")
        .SetFont(PdfFontFactory.CreateFont(StandardFonts.HELVETICA_BOLD))
        .SetFontSize(10)
        .SetBorderTop(new SolidBorder(ColorConstants.LIGHT_GRAY, 1))
        .SetWidth(539)
      ;

      Link link = new Link("Ricardo Gaefke", PdfAction.CreateURI("https://pdf.ricardogaefke.com"));

      footer.Add(link);

      for (int i = 1; i <= pdfDoc.GetNumberOfPages(); i++)
      {
        Rectangle pageSize = pdfDoc.GetPage(i).GetPageSize();
        float x = pageSize.GetWidth() / 2;
        float y = pageSize.GetBottom() + 15;
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
        Rectangle pageSize = pdfDoc.GetPage(i).GetPageSize();
        float x = pageSize.GetWidth() / 2;
        float y = pageSize.GetTop() - 20;
        doc.ShowTextAligned(header, x, y, i, TextAlignment.CENTER, VerticalAlignment.BOTTOM, 0);
      }
    }

    private void AddTitle(Document doc, string title, string cert, string year)
    {
      Paragraph paragraph = new Paragraph()
        .SetFontSize(16)
        .SetBold()
        .SetTextAlignment(TextAlignment.CENTER)
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

    public byte[] CreateEnglish(Form info)
    {
      byte[] ba;

      using (MemoryStream ms = new MemoryStream())
      {
        PdfWriter writer = new PdfWriter(ms);
        PdfDocument pdf = new PdfDocument(writer);
        using (var doc = new Document(pdf, PageSize.A4))
        {
          doc.SetMargins(30, 10, 10, 10);

          IText text = new Texts.English();

          /// content
          AddTitle(doc, text.Title(), info.Guid.Substring(0, 8), info.When.Year.ToString());

          /// header and footer
          AddFooter(doc, pdf);
          AddHeader(doc, pdf);

          doc.Close();
        }
        ba = ms.ToArray();
      }

      return ba;
    }
  }
}
