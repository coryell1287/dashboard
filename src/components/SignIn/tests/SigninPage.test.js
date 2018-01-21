import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

const SignInButtons = require('../SignInButtons');

configure({ adapter: new Adapter() });


describe('Testing componet', function () {
  const wrapper = shallow(<SignInButtons />);
  console.log('Test might pass.', wrapper);
  // const wrapper = shallow(<SignInButtons />);
  // expect(wrapper).to.have.length(1);
});
