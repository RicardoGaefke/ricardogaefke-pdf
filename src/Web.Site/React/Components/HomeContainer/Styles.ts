import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  container: {},
}

export default makeStyles((): IStyles => ({
  container: {
    display: 'flex',
    flex: 1,
    '@media screen and (min-width: 768px)': {
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
}));
