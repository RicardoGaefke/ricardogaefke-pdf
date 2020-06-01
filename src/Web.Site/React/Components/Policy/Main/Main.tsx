import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container,
} from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <div className={classes.main}>
        <img alt={t('PolicyMain:title')} src="/img/locker.jpg" className={classes.img} />
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            {t('PolicyMain:title')}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {t('PolicyMain:text')}
          </Typography>
        </Container>
      </div>
    );
  },
);
