import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import CodeIcon from '@material-ui/icons/Code';
import setLanguage from './Language';
import Button from '../Button/Button';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    return (
      <Button
        color="inherit"
        title={t('BtnHowItWorks:title')}
        href="/how"
      >
        <CodeIcon />
      </Button>
    );
  },
);
