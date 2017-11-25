import {
  slideInSignUpForm,
  slideOutSignUpForm,
  slideOutSignInForm,
  slideInSignInForm,
  expandForm,
  resetHeight,
} from 'components/SignIn/signInPageStyles';

export default class SignInActions {
  static showSignInForm() {
    return {
      type: 'SHOW_SIGNIN_FORM',
      signIn: slideInSignInForm,
    };
  }

  static hideSignInForm() {
    return {
      type: 'HIDE_SIGNIN_FORM',
      signIn: slideOutSignInForm,
    };
  }

  static showSignUpForm() {
    return {
      type: 'SHOW_SIGNUP_FORM',
      signUp: slideInSignUpForm,
    };
  }

  static hideSignUpForm() {
    return {
      type: 'HIDE_SIGNUP_FORM',
      signUp: slideOutSignUpForm,
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
