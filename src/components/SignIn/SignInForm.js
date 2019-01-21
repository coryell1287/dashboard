import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SignInButtons from 'components/SignIn/SignInButtons';

const Input = (props) => {
  return (
    <label htmlFor={props.name}>
      <section style={{ marginBottom: '12px' }}>
        <span className="signInLabel">{props.label}</span>
        <span className="signInErrorMessage">{props.signInFormControls.signInErrors[props.label]}</span>
      </section>
      <input
        autoComplete="off"
        value={props.value}
        className={
          classnames('signInInputFields', {
            inputError: props.signInFormControls.signInFlags[props.label],
          })}
        data-field={props.fieldId}
        name={props.name}
        id={props.name}
        type={props.type}
        onChange={props.onUserInput}
      />
    </label>
  );
}

const SignInForm = ({ signInAnimation, onUserSignIn, signInFields, buttons: { signInButton, disableSignInButton }, ...rest }) => {
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
        onUserSignIn={onUserSignIn}
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
