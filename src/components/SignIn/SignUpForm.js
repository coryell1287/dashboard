import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  primary: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main
  },

  disabled: {
    color: theme.palette.text.default,
    cursor: 'none'
  }

});

const Input = (props) => (
  <label htmlFor={props.name}>
    <span className="signUpLabel">{props.label}</span>
    <input
      autoComplete="off"
      value={props.value}
      className={
        classnames('signUpInputFields', {
          inputError: props.signUpFormControls.signUpFlags[props.name],
        })}
      name={props.name}
      id={props.name}
      data-field={props.fieldId}
      type={props.type}
      onChange={e => props.onSignUpInput(e, props.index)}
    />
  </label>
);

const SignUpForm = (props) => {
  return (
    <form id="signUp" className={`signUpForm ${props.signUpAnimation}`}>
      <div style={{ marginTop: '80px' }}>
        {props.signUpFields.map((input, idx) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            value={props.signUpFields[idx].value}
            type={input.type}
            fieldId={input.id}
            index={idx}
            {...props}
          />
        ))}
      </div>
      <div className="actionButtons">
        <Button
          onClick={props.onUserSignUp}
          variant="contained"
          color="primary"
          className={props.classes.primary}
        >
          {props.buttons.signUpButton}
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  signUpAnimation: state.signInState.signUpForm.signUpAnimation,
  heightResize: state.signInState.formWrapper.heightResize,
});

export default connect(mapStateToProps)(withStyles(styles)(SignUpForm));
