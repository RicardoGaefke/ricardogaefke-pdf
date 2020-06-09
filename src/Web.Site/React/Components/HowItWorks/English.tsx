import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Divider, Link, Chip,
  Table, TableRow, TableCell,
} from '@material-ui/core';
import useStyles from './Styles';

export default (): React.ReactElement => {
  const classes = useStyles({});

  return (
    <>
      <Typography variant="h2" align="center">
        How It Works
      </Typography>
      <Divider />
      <Typography variant="subtitle2" align="center" gutterBottom>
        THIS IS A SIMPLE EXAMPLE OF ASYNC INTEGRATION USING AZURE WEBJOBS ON AN AZURE LINUX DOCKER COMPOSE WEBAPP.
      </Typography>
      <Divider />
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        It has a simple form to fill with some information (just like a kind of inspection). Inserted data is sent
        to server and you&apos;ll always receive an answer. If everything runs fine, you&apos;ll receive an email
        with your PDF report in the Languages you choose. Otherwise, you&apos;ll receive an error message.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        <Link
          href="https://docs.microsoft.com/pt-br/azure/app-service/webjobs-create"
          target="_blank"
          title="Azure WebJobs"
        >
          Azure WebJobs
        </Link>
        &nbsp;are background services that are perfect for services integration and/or long time tasks
        (like PDF generation and external API calls).
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        WebJobs run connected to Azure Storage Queues and one of the best resources (in my opinion) is the
        ability to use a poison queue. When a run fails after X times (default is five), the message is sent
        to a
        <Chip label="-poison" size="small" className={classes.label} />
        queue. So if for any reason your execution falls in an error, you can have a second WebJob Function
        connected to the
        <Chip label="-poison" size="small" className={classes.label} />
        queue to handle the situation.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Tech summary:
      </Typography>
      <Chip label="ASP.NET Core" size="small" className={classes.chip} />
      <Chip label="Azure" size="small" className={classes.chip} />
      <Chip label="Azure Pipelines" size="small" className={classes.chip} />
      <Chip label="Azure SQL" size="small" className={classes.chip} />
      <Chip label="Azure Storage" size="small" className={classes.chip} />
      <Chip label="Azure WebApp" size="small" className={classes.chip} />
      <Chip label="Azure WebJobs" size="small" className={classes.chip} />
      <Chip label="C#" size="small" className={classes.chip} />
      <Chip label="Docker" size="small" className={classes.chip} />
      <Chip label="GitHub" size="small" className={classes.chip} />
      <Chip label="Material UI" size="small" className={classes.chip} />
      <Chip label="React" size="small" className={classes.chip} />
      <Chip label="Server Side Rendering" size="small" className={classes.chip} />
      <Chip label="Linux" size="small" className={classes.chip} />
      <Chip label="Alpine" size="small" className={classes.chip} />
      <Chip label="NGINX" size="small" className={classes.chip} />
      <Chip label="TypeScript" size="small" className={classes.chip} />

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        GitHub integration
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        The repo of this example (Web.Site + WebJob) is public and can be found at&nbsp;
        <Link
          href="https://github.com/RicardoGaefke/ricardogaefke-pdf"
          target="_blank"
          title="ricardogaefke-pdf repo"
        >
          GitHub/RicardoGaefke/ricardogaefke-pdf
        </Link>
        .
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        Docker registry
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        The containers of this app are registered in a public repo and can be found at&nbsp;
        <Link
          href="https://hub.docker.com/r/ricardogaefke/ricardogaefke-pdf"
          target="_blank"
          title="ricardogaefke-pdf Docker registry"
        >
          docker/ricardogaefke/ricardogaefke-pdf
        </Link>
        .
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        Azure Pipelines
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        This application is automatically built, tested and deployed by Azure Pipelines. Each
        git push to
        <Chip label="master" size="small" className={classes.label} />
        or to a PR is built and tested by Azure Pipelines. If the build of
        <Chip label="master" size="small" className={classes.label} />
        branch is ok the Release takes place and updates the app using Docker integration.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        This is the public&nbsp;
        <Link
          href="https://dev.azure.com/ricardogaefke/ricardogaefke-pdf"
          target="_blank"
          title="ricardogaefke-pdf Azure Pipeline"
        >
          Azure Pipeline
        </Link>
        .
      </Typography>

      <Table>
        <TableRow>
          <TableCell align="center">
            <Link
              href="https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_build?definitionId=30&_a=summary"
              target="_blank"
              title="Build status"
            >
              <img src="https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_apis/build/status/ricardogaefke-pdf" alt="Build status" />
            </Link>
          </TableCell>
          <TableCell align="center">
            <Link
              href="https://dev.azure.com/ricardogaefke/ricardogaefke-pdf/_release?_a=releases&view=mine&definitionId=1"
              target="_blank"
              title="Release status"
            >
              <img
                src="https://vsrm.dev.azure.com/ricardogaefke/_apis/public/Release/badge/7491df87-aec5-4b88-8b61-220428b021a8/1/1"
                alt="Release status"
              />
            </Link>
          </TableCell>
        </TableRow>
      </Table>
    </>
  );
};
