import React from 'react';
import SigninForm from './SigninForm';

import signinStyles from 'signinPageStyles.css';

const SigninPage = () => (
  <section className={signinStyles.signinWrapper}>
    <aside>
      <span></span>
    </aside>
    <SigninForm/>
  </section>
);

export default SigninPage;
