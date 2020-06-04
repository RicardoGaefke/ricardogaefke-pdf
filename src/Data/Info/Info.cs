using System;
using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;
using RicardoGaefke.Domain;

namespace RicardoGaefke.Data
{
  public class Info : IInfo
  {
    private readonly IOptions<Secrets.ConnectionStrings> _connStr;

    public Info(IOptions<Secrets.ConnectionStrings> ConnectionStrings)
    {
      _connStr = ConnectionStrings;
    }

    public Form Insert(Form data)
    {
      int id = 0;
      string guid = string.Empty;

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_PDF_ADD]";

          Cmd.Parameters.AddWithValue("@QUESTION1", data.Question1);
          Cmd.Parameters.AddWithValue("@QUESTION2", data.Question2);
          Cmd.Parameters.AddWithValue("@QUESTION3", data.Question3);
          Cmd.Parameters.AddWithValue("@QUESTION4", data.Question4);
          Cmd.Parameters.AddWithValue("@QUESTION5", data.Question5);
          Cmd.Parameters.AddWithValue("@APPROVED", data.Approved);
          Cmd.Parameters.AddWithValue("@ENGLISH", data.English);
          Cmd.Parameters.AddWithValue("@PORTUGUESE", data.Portuguese);
          Cmd.Parameters.AddWithValue("@INFO", data.Info);
          Cmd.Parameters.AddWithValue("@NAME", data.Name);
          Cmd.Parameters.AddWithValue("@EMAIL", data.Email);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            if (MyDR.HasRows)
            {
              MyDR.Read();

              id = MyDR.GetInt32(0);
              guid = MyDR.GetGuid(1).ToString();
            }
          }
        }
      }

      return new Form(id, guid);
    }

    public Form GetFileInfo(int id)
    {
      Form form = null;

      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_PDF_INFO]";

          Cmd.Parameters.AddWithValue("@ID", id);

          Con.Open();

          using (SqlDataReader MyDR = Cmd.ExecuteReader())
          {
            if (MyDR.HasRows)
            {
              MyDR.Read();

              form = new Form(
                MyDR.GetGuid(0).ToString(),
                MyDR.GetString(1),
                MyDR.GetString(2),
                MyDR.GetString(3),
                MyDR.GetString(4),
                MyDR.GetString(5),
                MyDR.GetBoolean(6),
                MyDR.GetBoolean(7),
                MyDR.GetString(8),
                MyDR.GetString(9),
                MyDR.GetString(10),
                MyDR.GetDateTime(11)
              );
            }
          }
        }
      }

      return form;
    }

    public void UpdateFileInfo(int id, bool success, int dequeue, string message)
    {
      using (SqlConnection Con = new SqlConnection(_connStr.Value.SqlServer))
      {
        using (SqlCommand Cmd = new SqlCommand())
        {
          Cmd.CommandType = CommandType.StoredProcedure;
          Cmd.Connection = Con;
          Cmd.CommandText = "[sp_PDF_UPDATE]";

          Cmd.Parameters.AddWithValue("@ID", id);
          Cmd.Parameters.AddWithValue("@SUCCESS", success);
          Cmd.Parameters.AddWithValue("@DEQUEUE", dequeue);
          Cmd.Parameters.AddWithValue("@MESSAGE", message);

          Con.Open();

          Cmd.ExecuteNonQuery();
        }
      }
    }
  }
}
