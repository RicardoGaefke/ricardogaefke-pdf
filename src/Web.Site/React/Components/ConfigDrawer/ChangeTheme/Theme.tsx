import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Radio, RadioGroup, FormControl, FormLabel, FormControlLabel, Divider,
} from '@material-ui/core';
import setLanguage from './Language';
import { useStateValue } from '../../../Initial/Context/StateProvider';
import styles from '../Styles';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const [{ Theme }, dispatch] = useStateValue();
    const classes = styles({});
    setLanguage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({
        type: 'changeTheme',
        value: (event.target as HTMLInputElement).value,
      });
    };

    return (
      <>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            {t('ThemeConfig:title')}
          </FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={Theme} onChange={handleChange}>
            <FormControlLabel value="dark" control={<Radio />} label={t('ThemeConfig:dark')} />
            <FormControlLabel value="light" control={<Radio />} label={t('ThemeConfig:light')} />
          </RadioGroup>
        </FormControl>
        <Divider className={classes.divider} />
      </>
    );
  },
);
