import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Paper from '@material-ui/core/Paper';

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

const SignInForm = ({ signInAnimation, signInFields, buttons: { signInButton, disableSignInButton }, ...rest }) => {
  console.log(signInAnimation);
  return (
    <form id="signIn" className={`signInForm ${signInAnimation}`}>
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
};

const mapStateToProps = state => ({
  signInAnimation: state.signInState.signInForm.signInAnimation,
  heightResize: state.signInState.formWrapper.heightResize,
});

export default connect(mapStateToProps)(SignInForm);
