import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  SnackbarContent,
} from '@material-ui/core';
import { useStateValue } from '../../Initial/Context/StateProvider';
import useStyles from './Styles';
import ConsentMessage from './ConsentMessage';
import ConsentAction from './ConsentAction';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ ConsentCookie }, dispatch] = useStateValue();
    const classes = useStyles({});
    setLanguage();

    const closeConsent = (): void => {
      const myRoot: HTMLElement = document.getElementById('root')!;
      document.cookie = myRoot.dataset.cookieString!;

      dispatch({
        type: 'changeConsent',
        value: !ConsentCookie,
      });
    };

    return (
      <SnackbarContent
        className={classes.snackbar}
        message={<ConsentMessage message={t('ConsentCookie:text')} text={t('ConsentCookie:link.text')} title={t('ConsentCookie:link.label')} />}
        action={<ConsentAction text={t('ConsentCookie:btn.text')} title={t('ConsentCookie:btn.label')} close={closeConsent} />}
      />
    );
  },
);
