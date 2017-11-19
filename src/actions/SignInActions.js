import {
  slideInSignUpForm,
  slideOutSignUpForm,
  slideOutSignInForm,
  slideInSignInForm,
  expandForm,
  resetHeight,
} from 'components/Signin/signinPageStyles';

export default class SignInActions {
  static showSignInForm() {
    return {
      type: 'SHOW_SIGNIN_FORM',
      signin: slideInSignInForm,
    };
  }

  static hideSignInForm() {
    return {
      type: 'HIDE_SIGNIN_FORM',
      signin: slideOutSignInForm,
    };
  }

  static showSignUpForm() {
    return {
      type: 'SHOW_SIGNUP_FORM',
      signup: slideInSignUpForm,
    };
  }

  static hideSignUpForm() {
    return {
      type: 'HIDE_SIGNUP_FORM',
      signup: slideOutSignUpForm,
    };
  }

  static expandForm() {
    return {
      type: 'EXPAND_FORM',
      formWrapper: expandForm,
    };
  }

  static resetHeight() {
    return {
      type: 'RESET_HEIGHT',
      formWrapper: resetHeight,
    };
  }

  static signUpUser() {
    return [
      SignInActions.hideSignInForm(),
      SignInActions.showSignUpForm(),
      SignInActions.expandForm(),
    ];
  }

  static signInUser() {
    return [
      SignInActions.showSignInForm(),
      SignInActions.hideSignUpForm(),
      SignInActions.resetHeight(),
    ];
  }
}
