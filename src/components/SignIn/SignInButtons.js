import React from 'react';

const SignInButtons = ({ control, disableButton }) => (
  <div className="actionButtons">
    {
      disableButton ?
        <button type="submit" className="primaryColor button">{control}</button>
        : <button type="button" className="primaryColor disable">{control}</button>
    }
  </div>
);

export default SignInButtons;
