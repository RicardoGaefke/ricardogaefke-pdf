// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  snackbar: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  snackbar: {
    margin: theme.spacing(1),
    color: (theme.palette.type === 'dark') ? '#000' : '#fff',
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 0,

    '@media screen and (min-width: 768px)': {
      maxWidth: 500,
      position: 'fixed',
      bottom: 40,
      left: 2,
    },
  },
}));
