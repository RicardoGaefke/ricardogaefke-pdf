import { makeStyles } from '@material-ui/core/styles';

interface IStyles {
  btn: {}
}

export default makeStyles((): IStyles => ({
  btn: {
    height: '65px',
    paddingLeft: '4px',
    paddingRight: '4px',
  },
}));
