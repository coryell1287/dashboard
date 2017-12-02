import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import SignInButtons from 'components/SignIn/SignInButtons';
import { signInInputFields, inputError, signInLabel, signUpForm } from 'components/SignIn/signInPageStyles';

const Input = (props) => (
  <label htmlFor={props.name}>
    <span className={signInLabel}>{props.label}</span>
    <input
      autoComplete="off"
      value={props.value}
      className={
        classnames(signInInputFields, {
          [inputError]: props.signUpFormControls.signUpFlags[props.name],
        })}
      name={props.name}
      id={props.name}
      data-field={props.fieldId}
      type={props.type}
      onChange={e => props.onUserSignUp(e, props.index)}
    />
  </label>
);

const SignUpForm = ({ signUp, signUpFields, buttons: { signUpButton, disableSignUpButton }, ...rest }) => (
  <form id="signUp" className={classnames(signUpForm, signUp)}>
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
      disabledButton={!disableSignUpButton}
      control={signUpButton}/>
  </form>
);

const mapStateToProps = state => ({
  signUp: state.signInState.signUpForm,
});

export default connect(mapStateToProps)(SignUpForm);
