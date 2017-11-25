import React from 'react';

import appStyles from 'styles/appStyles';

const SignInButtons = ({ control }) => (
  <div className={appStyles.actionButtons}>
    <button disabled={false} className={appStyles.primaryButton}>{control}</button>
  </div>
);

export default SignInButtons;
