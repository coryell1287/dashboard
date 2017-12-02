import React from 'react';
import classnames from 'classnames';

import { actionButtons, primaryColor, button, disabled } from 'styles/appStyles';

const SignInButtons = ({ control, disableButton }) => (
  <div className={actionButtons}>
    {
      disableButton ?
        <button type="submit" className={classnames(primaryColor, button)}>{control}</button>
        : <button type="button" className={classnames(button, disabled)}>{control}</button>
    }
  </div>
);

export default SignInButtons;
