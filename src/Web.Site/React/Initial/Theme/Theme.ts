// eslint-disable-next-line no-unused-vars
import { createMuiTheme, Theme } from '@material-ui/core/styles';

const MyTheme = (t: string = 'dark'): Theme => {
  const myThemeDark = createMuiTheme({
    shape: {
      borderRadius: 0,
    },
    palette: {
      type: 'dark',
    },
  });

  const myThemeLight = createMuiTheme({
    shape: {
      borderRadius: 0,
    },
    palette: {
      type: 'light',
    },
  });

  return (t === 'light') ? myThemeLight : myThemeDark;
};

export default MyTheme;
