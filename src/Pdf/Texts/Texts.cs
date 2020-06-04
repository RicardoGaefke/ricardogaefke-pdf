using System;
namespace RicardoGaefke.Pdf
{
  public class Texts
  {
    public class English : IText
    {
      public string Title()
      {
        return "Certificate";
      }

      public string Question()
      {
        return "Is this the question you just answered?";
      }

      public string Answer()
      {
        return "This was your answer to this question";
      }

      public string Footer()
      {
        return "You can check the authenticity of this document at";
      }

      public string Signature()
      {
        return "Document digitally signed by";
      }
    }

    public class Portuguese : IText
    {
      public string Title()
      {
        return "Certificado";
      }

      public string Question()
      {
        return "Esta é a questão que você acabou de responder?";
      }

      public string Answer()
      {
        return "Esta foi a tua resposta para a questão";
      }

      public string Footer()
      {
        return "Você pode verificar a autenticidade deste documento em";
      }

      public string Signature()
      {
        return "Documento assinado digitalmente por";
      }
    }
  }
}
