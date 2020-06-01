import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from './ErrorBoundary';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Web.Identity -> ErrorBoundary.ErrorBoundary', (): void => {
  describe('Smoke Tests', (): void => {
    it('Should exist a module ErrorBoundary', (): void => {
      const wrapper = shallow(<ErrorBoundary />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
  describe('Childrens Tests', (): void => {
    it('Should exist a module ErrorBoundary with state hasError equal false by default', (): void => {
      const wrapper = shallow(<ErrorBoundary />);
      expect(wrapper.state()).eql({ hasError: false });
    });
  });
});
