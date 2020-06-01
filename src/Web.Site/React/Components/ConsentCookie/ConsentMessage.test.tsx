import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import { Typography, Link } from '@material-ui/core';
import { Link as RLink } from 'react-router-dom';
import ConsentMessage from './ConsentMessage';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> ConsentCookie.ConsentMessage', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist ConsentMessage', (): void => {
      const wrapper: any = shallow(<ConsentMessage message="" text="" title="" />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Childrens Tests', (): void => {
    it('Should ConsentMessage: Typography to have children equal message when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentMessage
          message="Hello World"
          text=""
          title=""
        />,
      );
      expect(wrapper.find(Typography).props().children).equal('Hello World');
    });
    it('Should ConsentMessage: Link to have children equal text when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentMessage
          message=""
          text="My Hello World"
          title=""
        />,
      );
      expect(wrapper.find(Link).props().children).equal('My Hello World');
    });
    it('Should ConsentMessage: Link to have title equal title when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentMessage
          message=""
          text=""
          title="HelloWorld"
        />,
      );
      expect(wrapper.find(Link).props().title).equal('HelloWorld');
    });
    it('Should ConsentMessage: Link to have component equal RLink when is passed', (): void => {
      const wrapper: any = shallow(
        <ConsentMessage
          message=""
          text=""
          title=""
        />,
      );
      expect(wrapper.find(Link).props().component).equal(RLink);
    });
  });
});
