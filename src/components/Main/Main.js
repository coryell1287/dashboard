import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Content, QueryString, EZBuilder } from 'components/Content';
import Dashboard from 'components/Dashboard';
import MainHeader from 'components/MainHeader';

const Main = () => (
  <main id="mainContent" className="mainContent">
    <MainHeader/>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/content" component={Content}/>
      <Route path="/query-string/:id" component={QueryString}/>
      <Route path="/ez-builder" component={EZBuilder}/>
    </Switch>
  </main>

);

export default withRouter(Main);
