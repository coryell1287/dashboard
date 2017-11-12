export default class SiginActions {
  static showSiginForm() {
    return {
      type: 'SHOW_SIGNIN_FORM',
      signin: 'signin',
    };
  }

  static hideSiginForm() {
    return {
      type: 'HIDE_SIGNIN_FORM',
      signin: '',
    };
  }

  static showSignupForm() {
    return {
      type: 'SHOW_SIGNUP_FORM',
      register: 'register',
    };
  }

  static hideSignupForm() {
    return {
      type: 'SHOW_SIGNIN_FORM',
      register: '',
    };
  }
}
