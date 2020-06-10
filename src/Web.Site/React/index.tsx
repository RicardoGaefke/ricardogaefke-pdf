import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { ICustomWindow } from './Interfaces/ICustomWindow';
import MyStateProvider from './Initial/Context/AppContext';
import MyApp from './Initial/App';

const App = (): React.ReactElement<any> => {
  const appData = (window as unknown as ICustomWindow).MyInitialState;
  delete (window as unknown as ICustomWindow).MyInitialState;

  return (
    <BrowserRouter>
      <MyStateProvider initialContext={appData}>
        <MyApp />
      </MyStateProvider>
    </BrowserRouter>
  );
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
