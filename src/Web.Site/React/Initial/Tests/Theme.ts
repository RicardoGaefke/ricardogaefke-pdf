import { createMuiTheme } from '@material-ui/core/styles';

const MyTheme = (t: string = 'dark'): any => {
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
  // return myThemeLight;
};

export default MyTheme;
