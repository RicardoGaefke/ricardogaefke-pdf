using System.IO;
using System.Runtime.InteropServices;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;
using RicardoGaefke.DI;
using RicardoGaefke.Domain;
using RicardoGaefke.Data;
using RicardoGaefke.Storage;

namespace RicardoGaefke.Web.Site
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
      Configuration = configuration;
      HostEnvironment = hostEnvironment;
    }

    public IConfiguration Configuration { get; }
    public IHostEnvironment HostEnvironment { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.Configure<Secrets.ConnectionStrings>(Configuration.GetSection("ConnectionStrings"));

      services.AddSingleton<IInfo, Info>();
      services.AddSingleton<IBlob, Blob>();
      services.AddSingleton<IQueue, Queue>();

      Bootstrap.DataProtection(services, Configuration);
      Bootstrap.ConsentCookie(services, Configuration, HostEnvironment.IsDevelopment());

      Bootstrap.ConfigCors(services, Configuration, HostEnvironment.IsDevelopment());

      services.AddNodeServices(options =>
        {
          if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
          {
            options.ProjectPath = Path.GetFullPath("/app");
          }
        }
      );

      services
        .AddControllers()
        .AddNewtonsoftJson(options =>
        {
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
          options.SerializerSettings.DefaultValueHandling = Newtonsoft.Json.DefaultValueHandling.Ignore;
          options.SerializerSettings.ContractResolver = new DefaultContractResolver();
        })
      ;

      // ngix config --- not used here
      services.Configure<ForwardedHeadersOptions>(options =>
      {
        options.KnownProxies.Add(IPAddress.Parse("10.0.0.100"));
      });

      services.AddControllersWithViews();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      var cachePeriod = env.IsDevelopment() ? "600" : "31557600";

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseCookiePolicy();
      app.UseHttpsRedirection();
      app.UseRouting();
      app.UseCors();

      app.Use((context, next) =>
      {
        context.Response.Headers["Author"] = "Ricardo Gaefke";
        context.Response.Headers["Author_email"] = "ricardogaefke@gmail.com";
        context.Response.Headers["Author_URL"] = "www.ricardogaefke.com";
        return next.Invoke();
      });

      app.UseStaticFiles(new StaticFileOptions
      {
        OnPrepareResponse = ctx =>
        {
          ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
        }
      });

      // nginx config
      app.UseForwardedHeaders(new ForwardedHeadersOptions
      {
        ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
      });

      app.UseAuthentication();
      app.UseAuthorization();
      app.UseCookiePolicy();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
          name: "default",
          pattern: "{controller=Home}/{action=Index}/{id?}");
        endpoints.MapFallbackToController("Index", "Home");
      });
    }
  }
}
