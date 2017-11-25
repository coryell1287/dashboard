import { combineReducers } from 'redux';

class SignInReducer {
  static signIn(state = '', action) {
    switch (action.type) {
      case 'SHOW_SIGNIN_FORM': {
        return action.signIn;
      }
      case 'HIDE_SIGNIN_FORM': {
        return action.signIn;
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

  static signUp(state = '', action) {
    switch (action.type) {
      case 'SHOW_SIGNUP_FORM': {
        return action.signUp;
      }
      case 'HIDE_SIGNUP_FORM': {
        return action.signUp;
      }
      default:
        return state;
    }
  }
}

const reducers = {
  signInForm: SignInReducer.signIn,
  signUpForm: SignInReducer.signUp,
  formWrapper: SignInReducer.formWrapper,
};

export default combineReducers(reducers);
