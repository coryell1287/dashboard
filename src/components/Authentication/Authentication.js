import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import SignInPage from 'components/SignIn/SignInPage';

class Authentication extends PureComponent {
  state = {
    authenticated: false,
  };


  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        exact
        {...rest}
        render={() => {
          return (
            this.state.authenticated
              ? <Component {...this.props}/>
              : <SignInPage/>
          );
        }}
      />
    );
  }
}

export default Authentication;
