import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IInitialContext } from '../../Interfaces/IInitialContext';
import { StateProvider } from './StateProvider';

interface IMyStateProvider {
  children: React.ReactElement,
  initialContext: IInitialContext,
}

const MyStateProvider = (props: IMyStateProvider): React.ReactElement => {
  const { children, initialContext } = props;

  const reducer = (state: IInitialContext, action: any): IInitialContext => {
    switch (action.type) {
      case 'changeReady':
        return {
          ...state,
          Ready: action.value,
        };
      case 'changeAuth':
        return {
          ...state,
          IsAuthenticated: action.value,
        };
      case 'changeLanguage':
        return {
          ...state,
          Language: action.value,
        };
      case 'changeTheme':
        return {
          ...state,
          Theme: action.value,
        };
      case 'changeConsent':
        return {
          ...state,
          ConsentCookie: action.value,
        };
      case 'changeName':
        return {
          ...state,
          Name: action.value,
        };
      case 'changeEmail':
        return {
          ...state,
          Email: action.value,
        };
      case 'changeDrawer':
        return {
          ...state,
          Drawer: action.value,
        };
      case 'changeConfig':
        return {
          ...state,
          Config: action.value,
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider MyInitialState={initialContext} reducer={reducer}>
      {children}
    </StateProvider>
  );
};

export default MyStateProvider;
