import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import AppHeader from '../../components/AppHeader/AppHeader';

describe('AppHeader component', () => {
  it('should render required form elements', () => {
    const appHeader = shallow(<AppHeader/>);
    console.log(appHeader);
  });
});
