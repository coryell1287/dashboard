import React from 'react';

import signinStyles from './signinPageStyles.css';
import appStyles from './appStyles.css';

const SignInForm = () => (
  <form className={signinStyles.signinForm}>
    <div>
      <label htmlFor="username">
        <span className={signinStyles.signinLabel}>Username</span>
        <input className={signinStyles.signinInputFields} id="username" type="text"/>
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <span className={signinStyles.signinLabel}>Password</span>
        <input className={signinStyles.signinInputFields} id="password" type="password"/>
      </label>
    </div>
    <div className={appStyles.actionButtons}>
      <button className={appStyles.primaryColor}>Login</button>
      <button className={appStyles.primaryColor}>Register</button>
    </div>
  </form>
);

export default SignInForm;


