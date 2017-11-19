import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SigninButtons from 'components/Signin/SigninButtons';
import signinStyles from 'components/Signin/signinPageStyles';

const SigninForm = ({ signin }) => (
  <form id="signIn" className={classnames(signinStyles.signinForm, signin)}>
    <div>
      <label htmlFor="username">
        <span className={signinStyles.signinLabel}>Username</span>
        <input autoComplete="off" className={signinStyles.signinInputFields} id="username" type="text"/>
      </label>
    </div>
    <div>
      <label htmlFor="password">
        <span className={signinStyles.signinLabel}>Password</span>
        <input autoComplete="off" className={signinStyles.signinInputFields} id="password" type="password"/>
      </label>
    </div>
    <SigninButtons />
  </form>
);

const mapStateToProps = state => ({
  signin: state.signinState.signinForm,
});

export default connect(mapStateToProps)(SigninForm);
