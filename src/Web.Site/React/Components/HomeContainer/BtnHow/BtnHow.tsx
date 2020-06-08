import React from 'react';
import { Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;

    return (
      <Button
        variant="contained"
        fullWidth
        size="small"
        href="/how"
        title={t('BtnHowItWorks:title')}
      >
        {t('BtnHowItWorks:title')}
      </Button>
    );
  },
);
