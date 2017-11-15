import React from 'react';
import { connect } from 'react-redux';

import signinStyles from 'components/Signin/signinPageStyles';
import appStyles from 'styles/appStyles';

const SignupForm = () => (
  <form className={signinStyles.signupForm}>
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
      <button className={appStyles.primaryButton}>Sign In</button>
      <button className={appStyles.primaryButton}>Register</button>
    </div>
  </form>
);

const mapStateToProps = state => ({
  register: state.signinState.register,
});

export default connect(mapStateToProps)(SignupForm);
