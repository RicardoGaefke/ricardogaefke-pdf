// eslint-disable-next-line no-unused-vars
import { makeStyles, Theme } from '@material-ui/core/styles';

interface IStyles {
  container: {},
  content: {},
  img: {},
}

export default makeStyles((theme: Theme): IStyles => ({
  container: {
    display: 'flex',
    flex: 1,
  },
  content: {
    backgroundColor: (theme.palette.type === 'dark') ? 'white' : 'yellow',
  },
  img: {
    maxWidth: '85%',
    marginTop: theme.spacing(1),
  },
}));
