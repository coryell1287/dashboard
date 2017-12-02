import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Authentication extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...this.props} />
        }}
      />
    );
  }
}

export default Authentication;
