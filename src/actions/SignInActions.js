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

export const signUpUser = () => {
  store.dispatch(hideSignInForm());
  store.dispatch(showSignUpForm());
  store.dispatch(expandForm());
};

export const signInUser = () => {
  store.dispatch(showSignInForm());
  store.dispatch(hideSignUpForm());
  store.dispatch(resetHeight());
};
