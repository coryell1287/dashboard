import React, { Suspense, lazy } from 'react';
import MainHeader from 'components/MainHeader';
import { Route, Switch } from 'react-router-dom';

const Dashboard = lazy(() => import('../Dashboard'));
const Content = lazy(() => import('../Content/Content'));
const QueryString = lazy(() => import('../Content/QueryString'));
const EZBuilder = lazy(() => import('../Content/EZBuilder'));

const Main = () => (
  <main id="mainContent" className="mainContent">
    <Suspense fallback={<h1>Loading...</h1>}>
      <MainHeader/>
      <Switch>
        <Route exact path="/" render={()=><Dashboard/>}/>
        <Route path="/content" render={()=><Content/>}/>
        <Route path="/query-string/:id" render={()=><QueryString/>}/>
        <Route path="/ez-builder" render={()=><EZBuilder/>}/>
      </Switch>
    </Suspense>
  </main>
);

export default Main;



