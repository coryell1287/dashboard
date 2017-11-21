import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SigninButtons from 'components/Signin/SigninButtons';
import signinStyles from 'components/Signin/signinPageStyles';

const Input = ({ id, field, type }) => (
  <label htmlFor={id}>
    <span className={signinStyles.signinLabel}>{field}</span>
    <input autoComplete="off" className={signinStyles.signinInputFields} id={id} type={type}/>
  </label>
);

const SignupForm = ({ signup, signUpFields, buttons: { signUpButton } }) => (
  <form id="signup" className={classnames(signinStyles.signupForm, signup)}>
    <div>
      {signUpFields.map(input => (
        <Input
          key={input.id}
          field={input.field}
          id={input.id}
        />
      ))}
    </div>
    <SigninButtons control={signUpButton} />
  </form>
);

const mapStateToProps = state => ({
  signup: state.signinState.signupForm,
})

export default connect(mapStateToProps)(SignupForm);
