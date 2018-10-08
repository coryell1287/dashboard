import { combineReducers } from 'redux';

export const signInAnimation = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_SIGNIN_FORM': {
      return action.signInAnimation;
    }
    case 'HIDE_SIGNIN_FORM': {
      return action.signInAnimation;
    }
    default:
      return state;
  }
};

export const heightResize = (state = '', action) => {
  switch (action.type) {
    case 'EXPAND_FORM': {
      return action.heightResize;
    }
    case 'RESET_HEIGHT': {
      return action.heightResize;
    }
    default:
      return state;
  }
};

export const signUpAnimation = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_SIGNUP_FORM': {
      return action.signUpAnimation;
    }
    case 'HIDE_SIGNUP_FORM': {
      return action.signUpAnimation;
    }
    default:
      return state;
  }
};

const reducers = {
  signInAnimation,
  signUpAnimation,
  heightResize,
};

export default combineReducers(reducers);
