import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SigninForm from 'components/Signin/SigninForm';
import SignupForm from 'components/Signin/SignupForm';
import SignInLinkState from 'components/Signin/SignInLinkState';
import SignInLinks from 'components/Signin/SignInLinks';

import signinStyles from 'components/Signin/signinPageStyles';

const SigninPage = ({ formWrapper }) => (
  <article id="formWrapper" className={classnames(signinStyles.signinWrapper, formWrapper)}>
    <SignInLinkState>
      <SignInLinks />
    </SignInLinkState>
    <section className={signinStyles.container}>
      <SigninForm />
      <SignupForm />
    </section>
  </article>
);

const mapStateToProps = state => ({
  formWrapper: state.signinState.formWrapper,
})
export default connect(mapStateToProps)(SigninPage);
