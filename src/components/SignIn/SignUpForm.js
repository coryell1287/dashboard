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
          inputError: props.signUpFormControls.signUpFlags[props.name],
        })}
      name={props.name}
      id={props.name}
      data-field={props.fieldId}
      type={props.type}
      onChange={e => props.onUserSignUp(e, props.index)}
    />
  </label>
);

const SignUpForm = ({ signUpAnimation, signUpFields, buttons: { signUpButton, disableSignUpButton }, ...rest }) => {
  console.log(signUpAnimation, 'signupform');
  return (
    <form id="signUp" className={`signUpForm ${signUpAnimation}`}>
      <div>
        {signUpFields.map((input, idx) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            value={signUpFields[idx].value}
            type={input.type}
            fieldId={input.id}
            index={idx}
            {...rest}
          />
        ))}
      </div>
      <SignInButtons
        {...rest}
        disabledButton={disableSignUpButton}
        control={signUpButton}/>
    </form>
  );
};

const mapStateToProps = state => ({
  signUpAnimation: state.signInState.signUpForm.signUpAnimation,
  heightResize: state.signInState.formWrapper.heightResize,
});

export default connect(mapStateToProps)(SignUpForm);
