import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn } from 'components/SignIn/signIn.action';
import { CREATE_NEW_USER, GET_TOKEN } from 'components/SignIn/authentication.query';
import client from 'apolloClient';

const mapDispatchToProps = (dispatch) => bindActionCreators({ signIn }, dispatch);

class SignInFormValidation extends Component {
  state = {
    buttons: {
      signInButton: 'Sign In',
      signUpButton: 'Sign Up',
    },
    signInFormControls: {
      signInErrors: {
        email: '',
        password: '',
      },
      signInFlags: {
        email: false,
        password: false,
      },
    },
    signUpFormControls: {
      signUpErrors: {
        username: '',
        firstname: '',
        surname: '',
        password: '',
        confirm: '',
        email: '',
      },
      signUpFlags: {
        username: false,
        firstname: false,
        surname: false,
        email: false,
        password: false,
        confirm: false,
      },
    },
    signInFields: [{
      id: 'signInFields',
      name: 'email',
      label: 'email',
      type: 'email',
      value: '',
    }, {
      id: 'signInFields',
      name: 'password',
      label: 'password',
      type: 'password',
      value: '',
    }
    ],
    signUpFields: [{
      id: 'signUpFields',
      name: 'username',
      label: 'username',
      type: 'text',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'firstname',
      label: 'first name',
      type: 'text',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'surname',
      label: 'surname',
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
      name: 'password',
      label: 'password',
      type: 'password',
      value: '',
    }, {
      id: 'signUpFields',
      name: 'confirm',
      label: 'confirm',
      type: 'password',
      value: '',
    }],
  };


  handleSignInInput = ({ target }) => {
    const index = this.state.signInFields.findIndex(element => element.name === target.name);
    const arrayCopy = [...this.state.signInFields];
    arrayCopy[index].value = target.value;

    this.setState({ ...this.state, arrayCopy, });
  };

  handleSignUpInput = ({ target }) => {
    const index = this.state.signUpFields.findIndex(element => element.name === target.name);
    const arrayCopy = [...this.state.signUpFields];
    arrayCopy[index].value = target.value;

    this.setState({ ...this.state, arrayCopy, });
  };

  handleUserSignIn = () => {
    this.state.signInFields.map(({ name, id, value }) => {
      this.validateUserInput(name, id, value)
    });
  };

  handleUserSignUp = () => {
    this.state.signUpFields.map(({ name, id, value }) => {
      this.validateUserInput(name, id, value)
    });
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
        userError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.username = userError;
        return this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
      case 'firstname':
        userError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.firstname = userError;
        return this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
      case 'surname':
        userError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.surname = userError;
        return this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
      case 'password':
        if (isSignInForm) {
          passError = (value.length === 0 && isSignInForm);
          signInControls.signInFlags.password = passError;
          return this.setState(
            {
              ...this.state,
              signInControls,
            },
            () => this.validateSignInForm(),
          );
        }
        passError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.password = passError;
        this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateSignUpForm(),
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
            () => this.validateSignInForm(),
          );
        }
        emailError = (value.length === 0 && isSignUpForm);
        signUpControls.signUpFlags.email = emailError;
        this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateSignUpForm(),
        );
      case 'confirm':
        if (isSignUpForm) {
          confirmError = (value.length === 0 && isSignUpForm);
          signUpControls.signUpFlags.confirm = confirmError;
          return this.setState({ ...this.state, signUpControls }, () => this.validateSignUpForm());
        }
        return this.setState(
          {
            ...this.state,
            signUpControls,
          },
          () => this.validateSignUpForm(),
        );
      default:
        break;
    }
  };

  submitSignUpForm(username, firstname, surname, email, password) {
    const variables = {
      username, firstname, surname, email, password
    };
    client.mutate({
      mutation: CREATE_NEW_USER,
      variables: {
        ...variables
      }
    }).then(({ data }) => {
      console.log(data.signUp.applied)
    }).catch(error => new Error(error));
  }

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

  validateSignUpForm() {
    const hasValues = this.state.signUpFields.every(element => element.value.length > 0);

    const confirm = this.state.signUpFields.find(item => {
      return item.label === 'confirm';
    });
    const password = this.state.signUpFields.find(item => {
      return item.label === 'password';
    });

    if ((confirm.value !== password.value) && !hasValues) {
      const copyControls = { ...this.state.signUpFormControls };
      copyControls.signUpFlags.confirm = true;
      copyControls.signUpFlags.password = true;
      this.setState({ copyControls });
      return;
    }
    this.submitSignUpForm(this.state.signUpFields[0].value,
      this.state.signUpFields[1].value,
      this.state.signUpFields[2].value,
      this.state.signUpFields[3].value,
      this.state.signUpFields[4].value)

  }

  validateSignInForm() {
    const { signInFormControls: { signInFlags: { password, email } } } = this.state;
    if (!password || !email) {
      return this.submitForm(this.state.signInFields[0].value, this.state.signInFields[1].value);
    }
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
              onSignInInput: this.handleSignInInput,
              onSignUpInput: this.handleSignUpInput
            }),
          )}
      </section>
    );
  }
}


export default connect(null, mapDispatchToProps)(SignInFormValidation);
