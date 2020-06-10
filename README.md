# ricardogaefke-pdf
Example of WebJobs for PDF creation.

|Build status|Release status|
|---|---|
|[![Build Status](https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_apis/build/status/ricardogaefke-pdf)](https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_build?definitionId=30&_a=summary)|[![Release Status](https://vsrm.dev.azure.com/ricardogaefke/_apis/public/Release/badge/7491df87-aec5-4b88-8b61-220428b021a8/1/1)](https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_release?_a=releases&view=mine&definitionId=1)|

## How it works

This is a simple example of async integration using Azure WebJobs on an Azure Linux docker-compose WebApp.
It has a simple form to fill with some information (just like a kind of inspection). Inserted data is sent to server and you'll always receive an answer. If everything runs fine, you'll receive an email with your PDF report in the Languages you choose. Otherwise, you'll receive an error message.

[Azure WebJobs](https://docs.microsoft.com/pt-br/azure/app-service/webjobs-create) are background services that are perfect for services integration and/or long time tasks (like PDF generation and external API calls).

WebJobs run connected to Azure Storage Queues and one of the best resources (in my opinion) is the ability to use `-poison` queue. When a run fails after X times (default is five), the message is sent to a `-poison` queue. So if for any reason your execution falls in an error, you can have a second WebJob Function connected to the `-poison` queue to handle the situation.

## GitHub Integration

The content of this example can be found at [https://pdf.ricardogaefke.com](https://pdf.ricardogaefke.com).

## Azure Pipelines

This application is automatically built, tested and deployed by Azure Pipelines. Each git push to `master` or to a PR is built and tested by Azure Pipelines. If the build of `master` branch is ok the Release takes place and updates the app using Docker integration.

This is the public [Azure Pipeline](https://dev.azure.com/ricardogaefke/ricardogaefke-pdf).

## Docker Registry

The containers of this app are registered in a public repo and can be found at [docker/ricardogaefke/ricardogaefke-pdf](https://hub.docker.com/r/ricardogaefke/ricardogaefke-pdf).
<!-- I am using Docker registry to create and publish the containers of this app using the Release Pipeline. There are two Docker repos being used here:

* 1 - [ricardogaefke-webjobs](https://hub.docker.com/r/ricardogaefke/ricardogaefke-webjobs)
This is used to save the containers used by app (webjob_site, webjob_nginx, webjob_xml, webjob_xml_poison).
* 2 - [ricardogaefke-webjobs-deploy](https://hub.docker.com/r/ricardogaefke/ricardogaefke-webjobs-deploy)
This repo is used just to trigger the Azure WebHook and update the WebApp after publishing all containers to previous Docker repo. -->

## Tech summary:

* [ASP.NET Core](https://docs.microsoft.com/pt-br/aspnet/core/?view=aspnetcore-3.1) - High-performance, open-source , multi-format framework for building modern Internet-connected and cloud-based applications.
* [Azure](https://docs.microsoft.com/pt-br/azure/) - A cloud plataform.
* [Azure Pipelines](https://docs.microsoft.com/pt-br/azure/devops/pipelines/?view=azure-devops) - Implement continuous integration and continuous delivery (CI/CD) for the app and platform of your choice.
* [Azure SQL](https://azure.microsoft.com/pt-br/services/sql-database/campaign/#documentation) - Azure SQL Server.
* [Azure Storage](https://docs.microsoft.com/pt-br/azure/storage/blobs/) - Azure Storage.
* [Azure WebApp](https://docs.microsoft.com/pt-br/azure/app-service/overview) - A modern web app service that offers streamlined full-stack development from source code to global high availability.
* [Azure Webjobs](https://docs.microsoft.com/pt-br/azure/app-service/webjobs-create) - Azure Webjobs.
* [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/) - Language C# to .NET Platform.
* [Docker](https://docs.docker.com/) - Platform for developers and sysadmins to build, run, and share.
* [GitHub](https://help.github.com/pt/github/getting-started-with-github) - The biggest developer community in the World.
* [Material-UI](https://material-ui.com/pt/) - React components library.
* [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces.
* [Server Side Rendering](https://github.com/guardian/support-frontend/wiki/Server-Side-Rendering) - Server Side Rendering (SSR) to add pre-rendered HTML to the page.
* [Linux](https://linux.die.net/) - Linux documentation.
* [Alpine](https://wiki.alpinelinux.org/wiki/Category_talk:Developer_Documentation) - Linux Alpine documentation.
* [NGINX](https://nginx.org/en/docs/) - Free, open-source, high-performance HTTP server, reverse proxy, and IMAP/POP3 proxy server.
* [Typescript](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/RicardoGaefke/ricardogaefke-pdf/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Ricardo Gaefke** - *Initial work* - [RicardoGaefke](https://github.com/RicardoGaefke)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/RicardoGaefke/ricardogaefke-pdf/blob/master/LICENSE) file for details.


