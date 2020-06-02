import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { SnackbarProvider } from 'notistack';
import { useStateValue } from './Context/StateProvider';
import './i18n/language';
import myTheme from './Theme/Theme';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import Template from '../Components/Template/Template';
import AppBar from '../Components/AppBar/AppBar';
import ConfigDrawer from '../Components/ConfigDrawer/Drawer';
import Footer from '../Components/Footer/Footer';
import useStyles from './Styles';
import MyConsentCookie from '../Components/ConsentCookie/ConsentCookie';

export default withTranslation()(
  (): React.ReactElement<any> => {
    const [{ Theme, ConsentCookie }] = useStateValue();
    const classes = useStyles({});

    return (
      <ThemeProvider theme={myTheme(Theme)}>
        <div className={classes.body}>
          <SnackbarProvider
            maxSnack={4}
            hideIconVariant={false}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'bottom',
            }}
            autoHideDuration={10000}
            dense
          >
            <AppBar />
            {ConsentCookie ? <MyConsentCookie /> : null}
            <div className={classes.main}>
              <ErrorBoundary>
                <Template />
              </ErrorBoundary>
            </div>
            <Footer />
            <ConfigDrawer />
          </SnackbarProvider>
        </div>
        <CssBaseline />
      </ThemeProvider>
    );
  },
);
