// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IStyles {
  root: {},
  container: {},
  item: {},
  button: {},
  divider: {},
  icon: {},
  form: {},
}

const useStyles = makeStyles((theme: Theme): IStyles => ({
  root: {
  },
  container: {
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  item: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '100%',
  },
  button: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  divider: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  form: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;
