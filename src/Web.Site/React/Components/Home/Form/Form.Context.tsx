// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withFormik } from 'formik';
import { Typography, Divider } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, withTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { WithSnackbarProps, withSnackbar } from 'notistack';
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios';
import setLanguage from './Language';
// eslint-disable-next-line no-unused-vars
import { IForm } from '../../../Interfaces/IForm';
import initialValues from './Form.InitialValues';
import Validation from './Form.Validation';
import MyForm from './Form';
import useStyles from './Form.Styles';
import MyAxios from '../../../Utils/MyAxios';
// eslint-disable-next-line no-unused-vars
import { IBasicReturn } from '../../../Interfaces/IBasicReturn';

const SuperForm = withFormik<WithTranslation & WithSnackbarProps, IForm>({
  displayName: 'DefaultForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => (initialValues),
  validationSchema: Validation,
  handleSubmit: async (values: IForm, { resetForm, setSubmitting, props }): Promise<void> => {
    const { enqueueSnackbar, t } = props;
    await MyAxios().post<IForm, AxiosResponse<IBasicReturn>>('api/SendData', values).then((response): void => {
      const { data } = response;

      if (data.Success) {
        enqueueSnackbar(t('Form:feedback.success'), {
          variant: 'success',
        });
      } else {
        enqueueSnackbar(t('Form:feedback.failure'), {
          variant: 'error',
        });
      }
    }).catch((): void => {
      enqueueSnackbar(t('Form:feedback.failure'), {
        variant: 'error',
      });
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);

const DefaultForm = withTranslation()(withSnackbar(SuperForm));

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
