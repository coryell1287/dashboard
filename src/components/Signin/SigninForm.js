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

const SigninForm = ({ signin, signInFields, buttons: { signInButton } }) => (
  <form id="signIn" className={classnames(signinStyles.signinForm, signin)}>
    <div>
      {signInFields.map(input => (
        <Input
          key={input.id}
          field={input.field}
          id={input.id}
        />
      ))}
    </div>
    <SigninButtons control={signInButton} />
  </form>
);

const mapStateToProps = state => ({
  signin: state.signinState.signinForm,
});

export default connect(mapStateToProps)(SigninForm);
