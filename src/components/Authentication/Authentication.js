import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

class Authentication extends PureComponent {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        exact
        {...rest}
        render={props => (<Component {...props} />)}
      />
    );
  }
}

export default Authentication;
