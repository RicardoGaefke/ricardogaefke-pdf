// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
import setLanguage from './Language';
// eslint-disable-next-line no-unused-vars
import { IForm } from '../../../Interfaces/IForm';
import initialValues from './Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from './Form.Styles';

const SuperForm = withFormik<WithTranslation, IForm>({
  displayName: 'DefaultForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

const DefaultForm = withTranslation()(SuperForm);

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          {t('Form:title')}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
        >
          {t('Form:subtitle')}
        </Typography>
        <Divider />
        <div className={classes.form}>
          <DefaultForm />
        </div>
      </>
    );
  },
);
