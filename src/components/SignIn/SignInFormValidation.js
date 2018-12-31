import React, { Component } from 'react';

class SignInFormValidation extends Component {
  state = {
    buttons: {
      signInButton: 'Sign In',
      disableSignInButton: false,
      disableSignUpButton: false,
      signUpButton: 'Sign Up',
    },
    signInFormControls: {
      signInErrors: {
        username: '',
        email: '',
        signInPassword: '',
      },
      signInFlags: {
        formValid: false,
        username: false,
        email: false,
        signInPassword: false,
      },
    },
    signUpFormControls: {
      signUpErrors: {
        username: '',
        password: '',
        confirm: '',
        email: '',
      },
      signUpFlags: {
        formValid: false,
        username: false,
        email: false,
        password: false,
        confirm: false,
      },
    },
    signInFields: [{
      id: 'signInFields',
      name: 'signInUsername',
      label: 'username',
      type: 'text',
      value: '',
    }, {
      id: 'signInFields',
      name: 'signInEmail',
      label: 'email',
      type: 'email',
      value: '',
    }, {
      id: 'signInFields',
      name: 'signInPassword',
      label: 'password',
      type: 'password',
      value: '',
    }
    ],
    signUpFields: [{
      id: 'signUpFields',
      name: 'signUpUsername',
      label: 'username',
      type: 'text',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'email',
      label: 'email',
      type: 'text',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'signUpPassword',
      label: 'password',
      type: 'password',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'confirm',
      label: 'confirm password',
      type: 'password',
      value: '',
    }],
  };

  handleUserSignIn = (e, index) => {
    const target = e.target;
    const signInInput = [...this.state.signInFields];
    const fieldName = target.name;
    const fieldId = target.dataset.field;

    signInInput[index].value = target.value;
    this.setState(
      {
        ...this.state,
        signInInput,
      },
      () => this.validateUserInput(fieldName, fieldId, signInInput[index].value));
  };

  handleUserSignUp = (e, index) => {
    const target = e.target;
    const signUpInput = [...this.state.signUpFields];
    const fieldName = target.name;
    const fieldId = target.dataset.field;

    signUpInput[index].value = target.value;
    this.setState(
      {
        ...this.state,
        signUpInput,
      },
      () => this.validateUserInput(fieldName, fieldId, signUpInput[index].value));
  };

  validateUserInput = (fieldName, fieldId, value) => {
    let userError;
    let passError;
    let emailError;
    let confirmError;

    const isSignInForm = fieldId === 'signInFields';
    const isSignUpForm = fieldId === 'signUpFields';

    const signInControls = { ...this.state.signInFormControls };
    const signUpControls = { ...this.state.signUpFormControls };


    switch (fieldName) {
      case 'username':
        if (isSignInForm) {
          userError = (value.length > 1 && isSignInForm);
          signInControls.signInFlags.username = userError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateForm(),
          );
        }
        userError = (value.length > 1 && isSignUpForm);
        signUpControls.signUpFlags.username = userError;
        return this.setState({ ...this.state, signUpControls });
      case 'password':
        if (isSignInForm) {
          passError = (value.length > 1 && isSignInForm);
          signInControls.signInFlags.password = passError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateForm(),
          );
        }
        passError = (value.length > 1 && isSignUpForm);
        signUpControls.signUpFlags.password = passError;
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateForm(),
        );
      case 'email':
        emailError = (value.length > 1 && isSignUpForm);
        signUpControls.signUpFlags.email = emailError;
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateForm(),
        );
      case 'confirm':
        confirmError = (value.length > 1 && isSignUpForm);
        signUpControls.signUpFlags.confirm = confirmError;
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateForm(),
        );
      default:
        break;
    }
  };

  validateForm() {
    const buttons = { ...this.state.buttons };
    buttons.disableSignInButton = true;
    const { signInFormControls: { signInFlags: { username, password } } } = this.state;
    console.log(username, password);
    if (username || password) {
      return this.setState({ ...this.state, buttons });
    }
    buttons.disableSignInButton = false;
    return this.setState({ ...this.state, buttons });
  }

  render() {
    return (
      <section className="container">
        {
          React.Children.map(this.props.children,
            child => React.cloneElement(child, {
              ...child.props,
              ...this.props,
              ...this.state,
              onUserSignIn: this.handleUserSignIn,
              onUserSignUp: this.handleUserSignUp,
            }),
          )}
      </section>
    );
  }
}

export default SignInFormValidation;
