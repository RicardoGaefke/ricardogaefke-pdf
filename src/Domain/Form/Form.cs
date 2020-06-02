using System;
namespace RicardoGaefke.Domain
{
  public class Form
  {
    public int Id;
    public string Guid;
    public string Question1 { get; set; }
    public string Question2 { get; set; }
    public string Question3 { get; set; }
    public string Question4 { get; set; }
    public string Question5 { get; set; }
    public bool Approved {get; set; }
    public string Info { get; set;}
    public string Name { get; set; }
    public string Email { get; set; }
    public string FileName { get; set; }
    public int FileSize { get; set; }
    public string FileType { get; set; }
    public string FileBase64 { get; set; }

    public Form()
    {}

    public Form(string question1, string question2, string question3, string question4, string question5, bool approved, string info, string name, string email)
    {
      DomainException.When(!string.IsNullOrEmpty(question1), "Question1 is required!");
      DomainException.When(!string.IsNullOrEmpty(question2), "Question2 is required!");
      DomainException.When(!string.IsNullOrEmpty(question3), "Question3 is required!");
      DomainException.When(!string.IsNullOrEmpty(question4), "Question4 is required!");
      DomainException.When(!string.IsNullOrEmpty(question5), "Question5 is required!");
      DomainException.When(!string.IsNullOrEmpty(name), "Name is required!");
      DomainException.When(!string.IsNullOrEmpty(email), "Email is required!");

      this.Question1 = question1;
      this.Question2 = question2;
      this.Question3 = question3;
      this.Question4 = question4;
      this.Question5 = question5;
      this.Approved = approved;
      this.Info = info;
      this.Name = name;
      this.Email = email;
    }
  }
}
