import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import SigninPage from './SigninPage';
import SigninForm from './SigninForm';

configure({ adapter: new Adapter() });


describe('<SigninPage/>', function () {
  const wrapper = shallow(<SigninPage/>);
  expect(wrapper.find(SigninForm)).to.have.length(1);

});