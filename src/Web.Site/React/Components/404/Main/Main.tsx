import React from 'react';
import { Link as RLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container, Link,
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
        <img alt={t('404Main:title')} src="/img/fog.jpg" className={classes.img} />
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ops...
            &nbsp;
            {t('404Main:title')}
          </Typography>
          <Typography variant="h5" align="center" component="p" gutterBottom>
            {t('404Main:text')}
          </Typography>
          <Typography variant="h5" align="center" component="p" gutterBottom>
            <Link
              title={t('404Main:btn.title')}
              color="textPrimary"
              underline="always"
              component={RLink}
              to="/"
            >
              {t('404Main:btn.text')}
            </Link>
          </Typography>
        </Container>
      </div>
    );
  },
);
