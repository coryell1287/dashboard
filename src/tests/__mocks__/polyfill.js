import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';

global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.sessionStorage = sessionStorageMock;
global.localStorage = localStorageMock;
global.window.location.reload = jest.fn();
global.React = React;
global.shallow = shallow;
global.mount = mount;
