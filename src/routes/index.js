import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';
import Application from 'containers/Application';
import SigninPage from 'containers/SigninPage';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={SigninPage}/>
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
