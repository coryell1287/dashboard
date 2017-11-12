import React from 'react';
import SigninForm from 'components/Signin/SigninForm';
import SignupForm from 'components/Signin/SignupForm';

import signinStyles from 'components/Signin/signinPageStyles';

const SigninPage = () => (
  <article className={signinStyles.signinWrapper}>
    <aside>
      <nav className={signinStyles.navigation}>
        <ul className={signinStyles.navList}>
          <li><a href="">Sign In</a></li>
          <li><a href="">Sign Up</a></li>
        </ul>
      </nav>
    </aside>
    <section className={signinStyles.container}>
      <SigninForm />
      <SignupForm />
    </section>
  </article>
);

export default SigninPage;
