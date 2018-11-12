import React from 'react';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store/configureStore';
import Application from 'containers/Application';
import Authentication from 'components/Authentication';

const app = () => (
  <ConnectedRouter history={history}>
    <Authentication component={Application}/>
  </ConnectedRouter>
);

export default app;
