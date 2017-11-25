import React from 'react';
import { Button } from 'react-toolbox/lib/button';

import appStyles from 'styles/appStyles';

const SignInButtons = ({ control, disableButton }) => (
  <div className={appStyles.actionButtons}>
    {
      disableButton ?
        <button type="button" className={appStyles.primaryButton}>{control}</button>
        : <Button label="Sign In" disabled />
    }
  </div>
);

export default SignInButtons;
