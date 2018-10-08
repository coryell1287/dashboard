import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  primary: {
    color: theme.palette.text.primary,
    background: theme.palette.primary.main
  },

  disabled: {
    color: theme.palette.text.default,
    background: theme.palette.primary.main
  }

});

const SignInButtons = ({ control, disableButton, classes }) => (
  <div className="actionButtons">
    {
      disableButton ?
        (<Button variant="contained" className={classes.disabled}>
          {control}
        </Button>)
        : (<Button variant="contained" color="primary" className={classes.primary}>
          {control}
        </Button>)
    }
  </div>
);

export default withStyles(styles)(SignInButtons);
