import { combineReducers } from 'redux';

export const signInForm = (state = { signInAnimation: 'signIn-form' }, action) => {
  switch (action.type) {
    case 'SHOW_SIGNIN_FORM': {
      return {
        ...state,
        signInAnimation: action.signInAnimation,
      };
    }
    case 'HIDE_SIGNIN_FORM': {
      return {
        ...state,
        signInAnimation: action.signInAnimation,
      };
    }
    default:
      return state;
  }
};

export const formWrapper = (state = { heightResize: 'form-size' }, action) => {
  switch (action.type) {
    case 'EXPAND_FORM': {
      return {
        ...state,
        heightResize: action.heightResize,
      };
    }
    case 'RESET_HEIGHT': {
      return {
        ...state,
        heightResize: action.heightResize,
      };
    }
    default:
      return state;
  }
};

export const signUpForm = (state = { signUpAnimation: 'signup-form' }, action) => {
  switch (action.type) {
    case 'SHOW_SIGNUP_FORM': {
      return {
        ...state,
        signUpAnimation: action.signUpAnimation
      };
    }
    case 'HIDE_SIGNUP_FORM': {
      return {
        ...state,
        signUpAnimation: action.signUpAnimation,
      }
    }
    default:
      return state;
  }
};

const reducers = {
  signInForm,
  signUpForm,
  formWrapper,
};

export default combineReducers(reducers);
