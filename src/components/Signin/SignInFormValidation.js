import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignInFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: {
        signInButton: 'Sign In',
        signUpButton: 'Sign Up',
      },
      signInFields: [
        { id: 'username', field: 'username', type: 'text' },
        { id: 'password', field: 'password', type: 'password' },
      ],
      signUpFields: [
        { id: 'fullname', field: 'fullname', type: 'text' },
        { id: 'email', field: 'email', type: 'text' },
        { id: 'password', field: 'password', type: 'password' },
        { id: 'confirm', field: 'confirm password', type: 'password' },
      ],
    };
  }

  render() {
    return (
      <section className={this.props.containerStyle}>
        {
          React.Children.map(this.props.children,
            child => React.cloneElement(child, {
              ...child.props,
              ...this.props,
              ...this.state,
            }),
          )}
      </section>
    );
  }
}

export default connect(null)(SignInFormValidation);
