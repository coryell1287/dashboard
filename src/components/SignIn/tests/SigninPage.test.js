import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import SignInButtons from '../SignInButtons';

configure({ adapter: new Adapter() });


describe('Testing componet', function () {
  console.log('logging console statement');
});
