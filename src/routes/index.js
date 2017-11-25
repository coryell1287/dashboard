import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';
import Application from 'containers/Application';
import SignInPage from 'components/SignIn/SignInPage';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={SignInPage} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
