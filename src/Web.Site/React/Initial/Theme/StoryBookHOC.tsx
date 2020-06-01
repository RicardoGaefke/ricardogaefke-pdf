import React from 'react';
import MyStateProvider from '../Context/AppContext';
import appData from '../Context/InitialContext';
import MyApp from './StoryBookApp';

export default (props: React.PropsWithChildren<any>): React.ReactElement<any> => {
  const { children } = props;

  return (
    <MyStateProvider initialContext={appData}>
      <MyApp>
        {children}
      </MyApp>
    </MyStateProvider>
  );
};
