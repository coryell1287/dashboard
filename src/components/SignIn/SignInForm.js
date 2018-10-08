import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SignInButtons from 'components/SignIn/SignInButtons';

const Input = (props) => (
  <label htmlFor={props.name}>
    <span className="signInLabel">{props.label}</span>
    <input
      autoComplete="off"
      value={props.value}
      className={
        classnames('signInInputFields', {
          inputError: props.signInFormControls.signInFlags[props.name],
        })}
      data-field={props.fieldId}
      name={props.name}
      id={props.name}
      type={props.type}
      onChange={e => props.onUserSignIn(e, props.index)}
    />
  </label>
);

const SignInForm = ({ heightResize, signInAnimation, signInFields, buttons: { signInButton, disableSignInButton }, ...rest }) => (
  <form id="signIn" className={[`${heightResize} ${signInAnimation}`].join(' ')}>
    <div>
      {signInFields.map((input, idx) => (
        <Input
          key={input.name}
          label={input.label}
          name={input.name}
          index={idx}
          fieldId={input.id}
          type={input.type}
          value={signInFields[idx].value}
          {...rest}
        />
      ))}
    </div>
    <SignInButtons
      disableButton={disableSignInButton}
      control={signInButton}
    />
  </form>
);

const mapStateToProps = state => ({
  signInAnimation: state.signInState.signInAnimation,
});

export default connect(mapStateToProps)(SignInForm);
