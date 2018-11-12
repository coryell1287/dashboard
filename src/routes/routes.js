import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from 'components/Content/Content';
import QueryString from 'components/Content/QueryString';
import EZBuilder from 'components/Content/EZBuilder';
import Dashboard from 'components/Dashboard';

const routes = (
  <Switch>
    <Route exact path="/" component={Dashboard}/>
    <Route path="/content" component={Content}/>
    <Route path="/query-string/:id" component={QueryString}/>
    <Route path="/ez-builder" component={EZBuilder}/>
  </Switch>
);
export default routes;
