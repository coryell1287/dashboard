import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';
import Application from 'containers/Application';
import SignInPage from 'components/SignIn/SignInPage';
import Authentication from 'components/Authentication/Authentication';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Application/>
  </ConnectedRouter>
);

export default Routes;
