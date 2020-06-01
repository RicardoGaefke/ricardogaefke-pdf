import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { Button } from '@material-ui/core';
import ConsentAction from './ConsentAction';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> ConsentCookie.ConsentAction', (): void => {
  const close = (): void => {};

  describe('Smoke Tests', (): void => {
    it('Should exist ConsentAction', (): void => {
      const wrapper: any = shallow(<ConsentAction text="" title="" close={close} />);
      expect(wrapper.find(Button)).to.have.length(1);
    });
  });
  describe('Childrens Tests', (): void => {
    it('Should ConsentAction: Button to have children equal text when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentAction
          text="Hello World"
          title=""
          close={close}
        />,
      );
      expect(wrapper.find(Button).props().children).equal('Hello World');
    });
    it('Should ConsentAction: Button to have title equal title when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentAction
          text=""
          title="MyHelloWorld"
          close={close}
        />,
      );
      expect(wrapper.find(Button).props().title).equal('MyHelloWorld');
    });
    it('Should ConsentAction: Button to have onClick Event when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentAction
          text=""
          title=""
          close={close}
        />,
      );
      expect(wrapper.find(Button).props().onClick).equal(close);
    });
  });
});
