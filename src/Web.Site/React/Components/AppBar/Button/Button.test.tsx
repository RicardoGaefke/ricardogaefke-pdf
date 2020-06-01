import React from 'react';
import chai, { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> AppBar.Button', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist Button', (): void => {
      const wrapper = shallow(<Button />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Childrens Tests', (): void => {
    it('Should exist Button with props.color equal default when is passed', (): void => {
      const wrapper = shallow(<Button color="default" />);
      expect(wrapper.props().color).equal('default');
    });
    it('Should exist Button with props.disabled equal false when is passed', (): void => {
      const wrapper = shallow(<Button disabled={false} />);
      expect(wrapper.props().disabled).equal(false);
    });
  });
});
