import React from 'react';
import { connect } from 'react-redux';

import SignInForm from 'components/SignIn/SignInForm';
import SignUpForm from 'components/SignIn/SignUpForm';
import SignInLinkState from 'components/SignIn/SignInLinkState';
import SignInLinks from 'components/SignIn/SignInLinks';
import SignInFormValidation from 'components/SignIn/SignInFormValidation';

import 'components/SignIn/signInPageStyles.css';

const SignInPage = ({ formWrapper }) => (
  <main className="signInBackground">
    <article id="formWrapper" className={[`signInWrapper ${formWrapper}`].join(' ')}>
      <SignInLinkState>
        <SignInLinks/>
      </SignInLinkState>
      <SignInFormValidation containerStyle="container">
        <SignInForm/>
        <SignUpForm/>
      </SignInFormValidation>
    </article>
  </main>
);

const mapStateToProps = state => ({
  formWrapper: state.signInState.formWrapper,
});

export default connect(mapStateToProps)(SignInPage);
