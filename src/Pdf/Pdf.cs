using System;
using System.IO;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;

namespace RicardoGaefke.Pdf
{
  public class Pdf : IPdf
  {
    public void Create()
    {
      string dest = "out/teste.pdf";

      FileInfo file = new FileInfo(dest);
      file.Directory.Create();

      PdfWriter writer = new PdfWriter(dest);
      //Initialize PDF document
      PdfDocument pdf = new PdfDocument(writer);
      // Initialize document
      Document document = new Document(pdf);
      //Add paragraph to the document
      document.Add(new Paragraph("Hello World!"));
      //Close document
      document.Close();
    }
  }
}
