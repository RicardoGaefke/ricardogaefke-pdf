import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  largeIcon: {},
}

// eslint-disable-next-line no-unused-vars
export default makeStyles((): IStyles => ({
  largeIcon: {
    width: 200,
    height: 200,
  },
}));
