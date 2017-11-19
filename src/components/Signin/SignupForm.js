import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import signinStyles from 'components/Signin/signinPageStyles';
import appStyles from 'styles/appStyles';

const SignupForm = ({ signup }) => (
  <form id="signup" className={classnames(signinStyles.signupForm, signup)}>
    <div>
      <label htmlFor="fullname">
        <span className={signinStyles.signinLabel}>Full name</span>
        <input className={signinStyles.signinInputFields} id="fullname" type="text"/>
      </label>
    </div>
    <div>
      <label htmlFor="email">
        <span className={signinStyles.signinLabel}>email</span>
        <input className={signinStyles.signinInputFields} id="email" type="text"/>
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <span className={signinStyles.signinLabel}>Password</span>
        <input className={signinStyles.signinInputFields} id="password" type="password"/>
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <span className={signinStyles.signinLabel}>Confirm password</span>
        <input className={signinStyles.signinInputFields} id="password" type="password"/>
      </label>
    </div>
    <div className={appStyles.actionButtons}>
      <button className={appStyles.primaryButton}>Sign Up</button>
    </div>
  </form>
);

const mapStateToProps = state => ({
  signup: state.signinState.signupForm,
})

export default connect(mapStateToProps)(SignupForm);
