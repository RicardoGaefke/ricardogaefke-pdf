import React from 'react';
import { Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import setLanguage from './Language';

interface IProps extends WithTranslation {
  toggle: () => void,
}

export default withTranslation()(
  ((props: IProps): React.ReactElement<IProps> => {
    const { toggle, t } = props;
    setLanguage();

    return (
      <Button
        onClick={toggle}
        fullWidth
        variant="contained"
        title={t('ButtonCloseConfig:label')}
      >
        {t('ButtonCloseConfig:text')}
      </Button>
    );
  }),
);
