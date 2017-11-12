import { combineReducers } from 'redux';

class SigninReducer {
  static showSigninForm(state = 'signin', action) {
    switch (action.type) {
      case 'SHOW_SIGNIN_FORM': {
        return action.signin;
      }
      case 'HIDE_SIGNIN_FORM': {
        return '';
      }
      default:
        return state;
    }
  }

  static showSignupForm(state = '', action) {
    switch (action.type) {
      case 'SHOW_SIGNUP_FORM': {
        return action.register;
      }
      case 'HIDE_SIGNUP_FORM': {
        return '';
      }
      default:
        return state;
    }
  }
}

const reducers = {
  signinForm: SigninReducer.showSigninForm,
  signupForm: SigninReducer.showSignupForm,
};

export default combineReducers(reducers);
