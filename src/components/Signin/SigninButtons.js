import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';

import appStyles from 'styles/appStyles';

class SigninButtons extends Component {

  @autobind
  isRegistrationFormVisible(e) {
    e.preventDefault();

    if (this.props.signin.length > 0) {
      console.log('Sign-in form is showing.');
    }
    //The signin form is showing when the signin prop has a value
    //Set the prop to an empty string
    //Switch the class to have animation that scales
  }

  render() {
    return (
      <div className={appStyles.actionButtons}>
        <button className={appStyles.primaryButton}>Sign In</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signin: state.signinState.signinForm,
  register: state.signinState.register,
});

export default connect(mapStateToProps)(SigninButtons);
