import React from 'react';
import chai, { expect } from 'chai';
// eslint-disable-next-line no-unused-vars
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link as RLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Error from './Error';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> ErrorBoundary.Error', (): void => {
  const clearError = (): void => {};

  describe('Smoke Tests', (): void => {
    it('Should exist a module Error', (): void => {
      const wrapper = shallow(<Error clearError={clearError} />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper.props().children).equal('Home Page');
    });
  });
  describe('Childrens Tests', (): void => {
    it('Should button have a title equal "Home page" by default', (): void => {
      const wrapper = shallow(<Error clearError={clearError} />);
      expect(wrapper.props().title).equal('Home page');
    });
    it('Should button have a variant property equal "outlined" by default', (): void => {
      const wrapper = shallow(<Error clearError={clearError} />);
      expect(wrapper.props().variant).equal('outlined');
    });
    it('Should button have a component equal "RLink" by default', (): void => {
      const wrapper = shallow(<Error clearError={clearError} />);
      expect(wrapper.props().component).equal(RLink);
    });
    it('Should button have onClick equal "clearError()" by default', (): void => {
      const wrapper = shallow(<Error clearError={clearError} />);
      expect(wrapper.props().onClick).equal(clearError);
    });
  });
});
