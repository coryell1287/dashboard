import React from 'react';
import classnames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import appStyles from 'styles/appStyles';
import { Content } from 'components/Content';
import Dashboard from 'components/Dashboard';
import MainHeader from 'components/MainHeader';

const Main = () => (
  <main id="mainContent" className={classnames(appStyles.mainContent)}>
    <MainHeader />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/content" component={Content} />
    </Switch>
  </main>

);

export default withRouter(Main);
