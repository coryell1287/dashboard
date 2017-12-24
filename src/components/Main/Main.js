import React from 'react';
import classnames from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import appStyles from 'styles/appStyles';
import { Content } from 'components/Content';

const Main = () => (
  <main id="mainContent" className={classnames(appStyles.mainContent)}>
    <Switch>
      <Route exact path="/" render={() => <h1>Hello Motto</h1>} />
      <Route path="/content" component={Content} />
    </Switch>
  </main>

);

export default withRouter(Main);
