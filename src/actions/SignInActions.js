import { store } from 'store/configureStore';

export const showSignInForm = () => {
  return {
    type: 'SHOW_SIGNIN_FORM',
    signInAnimation: 'slideInSignInForm',
  };
};

export const hideSignInForm = () => {
  return {
    type: 'HIDE_SIGNIN_FORM',
    signInAnimation: 'slideOutSignInForm',
  };
};

export const showSignUpForm = () => {
  return {
    type: 'SHOW_SIGNUP_FORM',
    signUpAnimation: 'slideInSignUpForm',
  };
};

export const hideSignUpForm = () => {
  return {
    type: 'HIDE_SIGNUP_FORM',
    signUpAnimation: 'slideOutSignUpForm',
  };
};

export const expandForm = () => {
  return {
    type: 'EXPAND_FORM',
    heightResize: 'expandForm',
  };
};

export const resetHeight = () => {
  return {
    type: 'RESET_HEIGHT',
    heightResize: 'resetHeight',
  };
};

export const signUpUser = () => dispatch => {
  dispatch(hideSignInForm());
  dispatch(showSignUpForm());
  dispatch(expandForm());
};

export const signInUser = () => dispatch => {
  dispatch(showSignInForm());
  dispatch(hideSignUpForm());
  dispatch(resetHeight());
};
