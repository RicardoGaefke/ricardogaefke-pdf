import React from 'react';
import {
  Grid, TextField, Button, FormControl, InputLabel,
  Select, MenuItem, FormHelperText, Divider,
  FormControlLabel,
  Switch,
  Typography,
  Checkbox,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { WithTranslation, useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { FormikProps } from 'formik';
// eslint-disable-next-line no-unused-vars
import { IForm } from '../../../Interfaces/IForm';
// eslint-disable-next-line no-unused-vars
import { IOptions } from '../../../Interfaces/IOptions';
import useStyles from './Form.Styles';
import Options from './Options';

export type IMyForm = FormikProps<IForm> & WithTranslation;

export default (props: IMyForm): React.ReactElement<IForm> => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation('Form');

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
  } = props;

  i18n.on('languageChanged', (): void => {
    Object.keys(errors).forEach((fieldName): void => {
      setFieldTouched(fieldName as any);
    });
  });

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={2}
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            className={classes.item}
            error={errors.Question1 as any && touched.Question1 as any}
            variant="standard"
            size="small"
          >
            <InputLabel id="question1-label">{t('Form:question1.text')}</InputLabel>
            <Select
              labelId="question1-label"
              value={values.Question1}
              id="Question1"
              name="Question1"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {
                Options.map((o: IOptions): React.ReactElement => (
                  <MenuItem key={o.id} value={o.value}>{o.text}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{(errors.Question1 && touched.Question1) && errors.Question1}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            className={classes.item}
            error={errors.Question2 as any && touched.Question2 as any}
            variant="standard"
            size="small"
          >
            <InputLabel id="question2-label">{t('Form:question2.text')}</InputLabel>
            <Select
              labelId="question2-label"
              value={values.Question2}
              id="Question2"
              name="Question2"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {
                Options.map((o: IOptions): React.ReactElement => (
                  <MenuItem key={o.id} value={o.value}>{o.text}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{(errors.Question2 && touched.Question2) && errors.Question2}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            className={classes.item}
            error={errors.Question3 as any && touched.Question3 as any}
            variant="standard"
            size="small"
          >
            <InputLabel id="question3-label">{t('Form:question3.text')}</InputLabel>
            <Select
              labelId="question3-label"
              value={values.Question3}
              id="Question3"
              name="Question3"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {
                Options.map((o: IOptions): React.ReactElement => (
                  <MenuItem key={o.id} value={o.value}>{o.text}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{(errors.Question3 && touched.Question3) && errors.Question3}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            className={classes.item}
            error={errors.Question4 as any && touched.Question4 as any}
            variant="standard"
            size="small"
          >
            <InputLabel id="question4-label">{t('Form:question4.text')}</InputLabel>
            <Select
              labelId="question4-label"
              value={values.Question4}
              id="Question4"
              name="Question4"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {
                Options.map((o: IOptions): React.ReactElement => (
                  <MenuItem key={o.id} value={o.value}>{o.text}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{(errors.Question4 && touched.Question4) && errors.Question4}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            className={classes.item}
            error={errors.Question5 as any && touched.Question5 as any}
            variant="standard"
            size="small"
          >
            <InputLabel id="question5-label">{t('Form:question5.text')}</InputLabel>
            <Select
              labelId="question5-label"
              value={values.Question5}
              id="Question5"
              name="Question5"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {
                Options.map((o: IOptions): React.ReactElement => (
                  <MenuItem key={o.id} value={o.value}>{o.text}</MenuItem>
                ))
              }
            </Select>
            <FormHelperText>{(errors.Question5 && touched.Question5) && errors.Question5}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControl
            margin="dense"
            component="fieldset"
            className={classes.item}
          >
            <FormControlLabel
              control={
                (
                  <Switch
                    checked={values.Approved}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
                      setFieldValue('Approved', event.target.checked);
                    }}
                    value="Active"
                    color="primary"
                    inputProps={{
                      'aria-label': t('Form:approved.label'),
                      id: 'Active',
                      name: 'Active',
                    }}
                  />
                )
              }
              label={((values.Approved) ? t('Form:approved.checked') : t('Form:approved.unchecked'))}
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControlLabel
            disabled
            title={t('Form:english.title')}
            control={(
              <Checkbox
                checked={values.English}
                name="English"
                color="primary"
              />
            )}
            label={t('Form:english.label')}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <FormControlLabel
            title={t('Form:portuguese.title')}
            control={(
              <Checkbox
                checked={values.Portuguese}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Portuguese"
                color="primary"
              />
            )}
            label={t('Form:portuguese.label')}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <TextField
            error={errors.Info as any && touched.Info as any}
            label={t('Form:info.text')}
            title={t('Form:info.title')}
            name="Info"
            id="Info"
            value={values.Info}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Info && touched.Info) && errors.Info}
            variant="outlined"
            className={classes.item}
            fullWidth
            size="small"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Typography
        variant="body1"
        gutterBottom
      >
        Please inform data to receive the report.
      </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <TextField
            error={errors.Name as any && touched.Name as any}
            label={t('Form:name.text')}
            title={t('Form:name.title')}
            name="Name"
            id="Name"
            value={values.Name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Name && touched.Name) && errors.Name}
            variant="outlined"
            className={classes.item}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
        >
          <TextField
            error={errors.Email as any && touched.Email as any}
            label={t('Form:email.text')}
            title={t('Form:email.title')}
            type="email"
            name="Email"
            id="Email"
            value={values.Email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={(errors.Email && touched.Email) && errors.Email}
            variant="outlined"
            className={classes.item}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
        >
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            title={t('Form:button.title')}
            disabled={isSubmitting}
          >
            {t('Form:button.text')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
