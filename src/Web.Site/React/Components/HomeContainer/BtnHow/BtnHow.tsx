import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, Typography } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;

    return (
      <Typography align="center">
        <Link
          variant="body1"
          color="textSecondary"
          align="center"
          title={t('BtnHowItWorks:title')}
          component={NavLink}
          to="/how"
        >
          {t('BtnHowItWorks:title')}
        </Link>
      </Typography>
    );
  },
);
