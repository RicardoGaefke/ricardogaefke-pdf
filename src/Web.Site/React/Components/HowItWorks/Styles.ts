// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  container: {},
  paragraph: {},
  chip: {},
  label: {},
  divider: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  container: {
    padding: theme.spacing(3),
  },
  paragraph: {
    marginTop: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  label: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
