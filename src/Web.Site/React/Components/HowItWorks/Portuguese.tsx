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
      <Typography variant="h3" align="center" className={classes.paragraph} gutterBottom>
        Como funciona
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.paragraph} gutterBottom>
        Este é um exemplo simples de integração assíncrona usando Azure WebJobs em uma WebApp
        Linux com docker-compose.
      </Typography>
      <Divider />
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        A aplicação é composta de um formulário simples para preencher com algumas informações (como
        uma espécie de
        <i>check list</i>
        ). Os dados inseridos são enviados ao servidor e você sempre receberá uma resposta. Se tudo
        correr bem, você receberá um email com o seu relatório em PDF nos idiomas que você escolheu.
        Caso contrário, você receberá uma mensagem de erro.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Os&nbsp;
        <Link
          href="https://docs.microsoft.com/pt-br/azure/app-service/webjobs-create"
          target="_blank"
          title="Azure WebJobs"
        >
          WebJobs do Azure
        </Link>
        &nbsp;Os WebJobs do Azure são serviços em segundo plano que são perfeitos para integração de
        serviços e/ou tarefas de longa duração (como geração de PDF e chamadas de APIs externas).
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Os WebJobs executados conectados às Filas de Armazenamento do Azure e um dos melhores recursos
        (na minha opinião) é a capacidade de usar uma fila
        <Chip label="-poison" size="small" className={classes.label} />
        . Quando uma execução falha após X vezes (o padrão é cinco), a mensagem é enviada para uma fila
        de
        <Chip label="-poison" size="small" className={classes.label} />
        . Portanto, se por algum motivo sua execução apresentar um erro, você poderá ter uma segunda função
        em teu WebJob conectada à fila
        <Chip label="-poison" size="small" className={classes.label} />
        para contornar com a situação de erro.
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Tech summary:
      </Typography>

      <Typography variant="body1" align="justify" className={classes.paragraph}>
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
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h4" align="center">
        GitHub
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph}>
        O repositório completo desta aplicação de exemplo é
        público e pode ser encontrado em&nbsp;
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
        As imagens Docker desta aplicação estão registradas em um repositório Docker
        público em&nbsp;
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

      <Typography variant="body1" align="justify" className={classes.paragraph}>
        Esta aplicação tem&nbsp;
        <i>build</i>
        , teste e&nbsp;
        <i>deploy</i>
        &nbsp;feitos automaticamente pelo Azure Pipelines. Cada vez que a branch
        <Chip label="master" size="small" className={classes.label} />
        do repositório no GitHub é alterada, o&nbsp;
        <i>build</i>
        &nbsp;é automático. Se tudo correr bem, o&nbsp;
        <i>deploy</i>
        &nbsp;tem início imediato e atualiza a aplicação. Lembrando também que todos
        os PRs feitos na branch
        <Chip label="master" size="small" className={classes.label} />
        também são validados pelo&nbsp;
        <i>Pipeline</i>
        .
      </Typography>
      <Typography variant="body1" align="justify" className={classes.paragraph} gutterBottom>
        Este é o link para o&nbsp;
        <Link
          href="https://dev.azure.com/ricardogaefke/ricardogaefke-pdf"
          target="_blank"
          title="ricardogaefke-pdf Azure Pipeline"
        >
          Azure Pipeline
        </Link>
        &nbsp;público.
      </Typography>
    </>
  );
};
