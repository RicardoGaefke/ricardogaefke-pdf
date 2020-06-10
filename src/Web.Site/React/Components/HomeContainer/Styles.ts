import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  container: {},
}

export default makeStyles((): IStyles => ({
  container: {
    display: 'flex',
    flex: 1,
    paddingBottom: 30,
    '@media screen and (min-width: 768px)': {
      paddingTop: 30,
    },
  },
}));
