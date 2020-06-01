import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import setLanguage from './Language';
import Button from '../Button/Button';
import onClick from './onClick';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    setLanguage();

    return (
      <Button
        color="inherit"
        title={t('LoginBtnConfig:title')}
        onClick={onClick}
      >
        <ExitToAppIcon />
      </Button>
    );
  },
);
