import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import SignInPage from 'components/SignIn/SignInPage';

class Authentication extends PureComponent {
  state = {
    authenticated: false,
  };

  getToken = (email, token) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('email', email);
    this.setState({ authenticated: token.length > 0 });
  };

  componentDidMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({ authenticated: true })
    }
  }

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
              : <SignInPage onUserAuth={this.getToken}/>
          );
        }}
      />
    );
  }
}

export default Authentication;
