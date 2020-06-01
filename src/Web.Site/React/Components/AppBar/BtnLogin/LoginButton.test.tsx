import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyStateProvider from '../../../Initial/Context/AppContext';
import appData from '../../../Initial/Context/InitialContext';
import MyApp from '../../../Initial/Tests/TestsApp';
import LoginButton from './LoginButton';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> AppBar.LoginButton', (): void => {
  const App = (): React.ReactElement => (
    <MyStateProvider initialContext={appData}>
      <MyApp>
        <LoginButton />
      </MyApp>
    </MyStateProvider>
  );

  describe('Smoke Tests', (): void => {
    it('Should exist LoginButton', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('InitialContext Provider', (): void => {
    it('Should return App with Ready context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Ready).equal(false);
    });
    it('Should return App with Theme context like "light" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Theme).equal('light');
    });
    it('Should return App with Language context like "PT" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Language).equal('PT');
    });
    it('Should return App with ConsentCookie context like "true" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.ConsentCookie).equal(true);
    });
    it('Should return App with Name context like "Profile4d" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Name).equal('Profile4d');
    });
    it('Should return App with Email context like "empty" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Email).equal('');
    });
    it('Should return App with KeepConnected context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.KeepConnected).equal(false);
    });
    it('Should return App with Drawer context like "true" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.Drawer).equal(true);
    });
    it('Should return App with IsAuthenticated context like "false" by default', (): void => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(MyStateProvider).props().initialContext.IsAuthenticated).equal(false);
    });
  });
});
