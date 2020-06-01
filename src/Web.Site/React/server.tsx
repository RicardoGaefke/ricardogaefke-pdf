import '@babel/polyfill';
import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { createServerRenderer } from 'aspnet-prerendering';
import { ServerStyleSheets } from '@material-ui/styles';
import MyStateProvider from './Initial/Context/AppContext';
import MyApp from './Initial/App';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from './Interfaces/IInitialContext';

export default createServerRenderer((params): Promise<any> => new Promise((resolve): void => {
  const PageInfo = JSON.parse(params.data.page);
  PageInfo.ConsentCookie = params.data.consentCookie;

  const sheets = new ServerStyleSheets();

  const App = (
    <StaticRouter location={params.url} context={PageInfo}>
      <Route render={({ staticContext }): React.ReactElement<any> => (
        <MyStateProvider initialContext={staticContext as IInitialContext}>
          <MyApp />
        </MyStateProvider>
      )}
      />
    </StaticRouter>
  );

  const html = renderToString(
    sheets.collect(App),
  );

  const css = sheets.toString();

  const renderFullPage = (): string => `${html}<style>${css}</style>`;

  resolve({
    html: renderFullPage(),
    globals: {
      MyInitialState: PageInfo,
    },
  });
}));
