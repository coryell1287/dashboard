import { combineReducers } from 'redux';

class SigninReducer {
  static signin(state = '', action) {
    switch (action.type) {
      case 'SHOW_SIGNIN_FORM': {
        return action.signin;
      }
      case 'HIDE_SIGNIN_FORM': {
        return action.signin;
      }
      default:
        return state;
    }
  }

  static formWrapper(state = '', action) {
    switch (action.type) {
      case 'EXPAND_FORM': {
        return action.formWrapper;
      }
      case 'RESET_HEIGHT': {
        return action.formWrapper;
      }
      default:
        return state;
    }
  }

  static signup(state = '', action) {
    switch (action.type) {
      case 'SHOW_SIGNUP_FORM': {
        return action.signup;
      }
      case 'HIDE_SIGNUP_FORM': {
        return action.signup;
      }
      default:
        return state;
    }
  }
}

const reducers = {
  signinForm: SigninReducer.signin,
  signupForm: SigninReducer.signup,
  formWrapper: SigninReducer.formWrapper,
};

export default combineReducers(reducers);
