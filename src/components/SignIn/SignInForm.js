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
        onChange={props.onSignInInput}
      />
    </label>
  );
};

const SignInForm = (props) => {
  return (
    <form id="signIn" className={`signInForm ${props.signInAnimation}`}>
      <div>
        {props.signInFields.map((input, idx) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            index={idx}
            fieldId={input.id}
            type={input.type}
            value={props.signInFields[idx].value}
            {...props}
          />
        ))}
      </div>
      <div className="actionButtons">
        <Button
          onClick={props.onUserSignIn}
          variant="contained"
          color="primary"
          className={props.classes.primary}
        >
          {props.buttons.signInButton}
        </Button>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  signInAnimation: state.signInState.signInForm.signInAnimation,
  heightResize: state.signInState.formWrapper.heightResize,
});

export default connect(mapStateToProps)(withStyles(styles)(SignInForm));
