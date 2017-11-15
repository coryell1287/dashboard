import React from 'react';

import SigninForm from 'components/Signin/SigninForm';
import SignupForm from 'components/Signin/SignupForm';
import SignInLinkState from 'components/Signin/SignInLinkState';
import SignInLinks from 'components/Signin/SignInLinks';

import signinStyles from 'components/Signin/signinPageStyles';

const SigninPage = () => {
  return (
    <article className={signinStyles.signinWrapper}>
      <SignInLinkState>
        <SignInLinks />
      </SignInLinkState>
      <section className={signinStyles.container}>
        <SigninForm />
        <SignupForm />
      </section>
    </article>
  );
}

export default SigninPage;
