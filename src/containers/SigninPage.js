import React from 'react';

import formStyles from 'containers/signinPage.css';
import appStyles from 'styles/app.css';

const SigninPage = () => {
  return (
    <section className={formStyles.formWrapper}>
      <aside>
        <span></span>
      </aside>
      <form className={formStyles.signinForm}>
        <div>
          <label htmlFor="username">
            <span className={formStyles.signinLabel}>Username</span>
            <input className={formStyles.signinInputFields} id="username" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <span className={formStyles.signinLabel}>Password</span>
            <input className={formStyles.signinInputFields} id="password" type="password" />
          </label>
        </div>
        <div className={appStyles.actionButtons}>
          <button className={appStyles.primaryButton}>Login</button>
          <button className={appStyles.primaryButton}>Register</button>
        </div>
      </form>
    </section>
  );
};

export default SigninPage;
