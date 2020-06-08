using System;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection;
using RicardoGaefke.Domain;

namespace RicardoGaefke.DI
{
  public class Bootstrap
  {
    public static void DataProtection(IServiceCollection Services, IConfiguration Configuration)
    {
      Secrets.Login MyLogin = new Secrets.Login();
      Configuration.GetSection("ConnectionStrings").Bind(MyLogin);

      Services
        .AddDataProtection()
        .SetApplicationName("RicardoGaefke")
        .PersistKeysToAzureBlobStorage(new Uri(MyLogin.Blob))
        .ProtectKeysWithAzureKeyVault(
          MyLogin.KeyVault,
          MyLogin.ClientID,
          MyLogin.ClientSecret
        )
      ;
    }

    public static void ConfigData(IServiceCollection Services, IConfiguration Configuration)
    {
    }

    public static void ConsentCookie(IServiceCollection Services, IConfiguration Configuration, bool IsDev)
    {
      Services.Configure<CookiePolicyOptions>(options =>
      {
        options.CheckConsentNeeded = context => true;
        if (IsDev)
        {
          options.ConsentCookie.Domain = "localhost";
        }
        else
        {
          options.ConsentCookie.Domain = $".{Configuration.GetValue<string>("domain")}";
        }
      });
    }

    public static void ConfigCors(IServiceCollection Services, IConfiguration Configuration, bool IsDev)
    {
      Services.AddCors(options =>
        {
          options.AddDefaultPolicy(builder =>
          {
            if(IsDev)
            {
              builder
                .WithOrigins(
                  "https://localhost:5001",
                  "https://localhost:5050",
                  "https://localhost:5055",
                  "https://localhost:5060",
                  "https://localhost:5065",
                  "https://localhost:8080",
                  "http://localhost:9001"
                )
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
              ;
            }
            else
            {
              builder
                .WithOrigins(
                  $"https://*.{Configuration.GetValue<string>("domain")}"
                ).SetIsOriginAllowedToAllowWildcardSubdomains()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
              ;
            }
          });
        });
    }

    public static void CookiesAuth(IServiceCollection services, IConfiguration Configuration, bool IsDev)
    {
      string _host;

      if (IsDev)
      {
        _host = "localhost";
      }
      else
      {
        _host = $".{Configuration.GetValue<string>("domain")}";
      }

      services
        .AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
          options.Cookie.Name = "RicardoGaefke";
          options.Cookie.IsEssential = true;
          options.Cookie.HttpOnly = true;
          options.Cookie.SameSite = SameSiteMode.None;
          options.Cookie.Domain = _host;
          options.EventsType = typeof(CustomCookieAuthenticationEvents);
        })
      ;

      services.AddScoped<CustomCookieAuthenticationEvents>();

      services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
    }

    public static void CookieMiddleware(IApplicationBuilder app)
    {
      app.UseCookiePolicy();
    }

    public static void Headers(IApplicationBuilder app)
    {
      app.UseForwardedHeaders(new ForwardedHeadersOptions
      {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
      });
    }
  }
}
