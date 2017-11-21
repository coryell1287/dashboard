import React from 'react';

import appStyles from 'styles/appStyles';

const SigninButtons = ({ control }) => (
  <div className={appStyles.actionButtons}>
    <button className={appStyles.primaryButton}>{control}</button>
  </div>
);

export default SigninButtons;
