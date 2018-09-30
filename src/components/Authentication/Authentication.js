import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import SignInPage from 'components/SignIn/SignInPage';

class Authentication extends PureComponent {
  state = {
    authenticated: false,
  };


  render() {
    console.log('Something is working. Is it not?');
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        exact
        {...rest}
        render={() => (
          <Component {...this.props}/>
        )}
      />
    );
  }
}

export default Authentication;
