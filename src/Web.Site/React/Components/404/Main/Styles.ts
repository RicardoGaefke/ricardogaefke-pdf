// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core';

interface IStyles {
  main: {},
  img: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((theme: Theme): IStyles => ({
  main: {
    marginBottom: 30,
  },
  img: {
    maxWidth: '100%',
    marginBottom: 30,
  },
}));
