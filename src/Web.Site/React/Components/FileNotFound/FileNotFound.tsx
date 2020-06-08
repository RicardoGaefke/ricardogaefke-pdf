import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import { Grid, Typography } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import useLanguage from './Language';
import useStyles from './Styles';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});

    useLanguage();

    return (
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="caption">
          <SentimentVeryDissatisfiedIcon
            className={classes.largeIcon}
          />
        </Typography>
        <Typography variant="h4" align="center">
          {t('FileNotFound:title')}
        </Typography>
      </Grid>
    );
  },
);
