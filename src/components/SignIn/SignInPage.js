import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SignInForm from 'components/SignIn/SignInForm';
import SignUpForm from 'components/SignIn/SignUpForm';
import SignInLinkState from 'components/SignIn/SignInLinkState';
import SignInLinks from 'components/SignIn/SignInLinks';
import SignInFormValidation from 'components/SignIn/SignInFormValidation';

import signInStyles from 'components/SignIn/signInPageStyles';

const SignInPage = ({ formWrapper }) => (
  <main className={signInStyles.signInBackground}>
    <article id="formWrapper" className={classnames(signInStyles.signInWrapper, formWrapper)}>
      <SignInLinkState>
        <SignInLinks />
      </SignInLinkState>
      <SignInFormValidation containerStyle={signInStyles.container}>
        <SignInForm />
        <SignUpForm />
      </SignInFormValidation>
    </article>
  </main>
);

const mapStateToProps = state => ({
  formWrapper: state.signInState.formWrapper,
});

export default connect(mapStateToProps)(SignInPage);
