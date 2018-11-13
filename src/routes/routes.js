import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Content = lazy(() => import('../components/Content/Content'));
const QueryString = lazy(() => import('../components/Content/QueryString'));
const EZBuilder = lazy(() => import('../components/Content/EZBuilder'));

const routes = (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/content" component={Content}/>
      <Route path="/query-string/:id" component={QueryString}/>
      <Route path="/ez-builder" component={EZBuilder}/>
    </Switch>
  </Suspense>
);
export default routes;

