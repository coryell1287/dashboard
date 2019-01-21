import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn } from 'components/SignIn/signIn.action';
import { GET_TOKEN } from 'components/SignIn/authentication.query';
import client from 'apolloClient';

const mapDispatchToProps = (dispatch) => bindActionCreators({ signIn }, dispatch);

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
        password: '',
      },
      signInFlags: {
        username: false,
        email: false,
        password: false,
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

  handleUserInput = ({ target }) => {
    const index = this.state.signInFields.findIndex(element => element.name === target.name);
    const arrayCopy = [...this.state.signInFields];
    arrayCopy[index].value = target.value;

    this.setState({ ...this.state, arrayCopy, });
  };


  handleUserSignIn = () => {
    this.state.signInFields.map(({ label, id, value }) => this.validateUserInput(label, id, value));
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
          userError = (value.length === 0 && isSignInForm);
          signInControls.signInFlags.username = userError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateForm(),
          );
        }
        userError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.username = userError;
        return this.setState({ ...this.state, signUpControls });
      case 'password':
        if (isSignInForm) {
          passError = (value.length === 0 && isSignInForm);
          signInControls.signInFlags.password = passError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateForm(),
          );
        }
        passError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.password = passError;
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateForm(),
        );
      case 'email':
        if (isSignInForm) {
          emailError = (value.length === 0 && isSignInForm);
          signInControls.signInFlags.email = emailError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateForm(),
          );
        }
        emailError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.email = emailError;
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateForm(),
        );
      case 'confirm':
        confirmError = (value.length === 0 && isSignUpForm);
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

  submitForm(email, password) {
    client.query({
      query: GET_TOKEN,
      variables: {
        email,
        password
      }
    }).then(({ data }) => {
      if (data.authentication.token.length > 0) {
        this.props.onUserAuth(email, data.authentication.token);
      }
    })
      .catch(error => new Error(error))
  }

  validateForm() {
    const buttons = { ...this.state.buttons };
    buttons.disableSignInButton = true;
    const { signInFormControls: { signInFlags: { username, password, email } } } = this.state;
    if (username || password || email) {
      return this.setState({ ...this.state, buttons });
    }
    buttons.disableSignInButton = false;
    return this.setState({
      ...this.state,
      buttons
    }, () => this.submitForm(this.state.signInFields[1].value, this.state.signInFields[2].value));
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
              onUserInput: this.handleUserInput
            }),
          )}
      </section>
    );
  }
}


export default connect(null, mapDispatchToProps)(SignInFormValidation);
