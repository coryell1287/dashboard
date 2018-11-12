import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import asyncAwait from 'redux-async-await';

import createRootReducers from 'reducers';

const env = process.env.NODE_ENV;
const middleware = [thunk];
const history = createBrowserHistory();

if (env === 'development') {
  middleware.push(
    createLogger({
      collapsed: (getState, action) => true,
    }),
  );
}

const devTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const middlewareEnhancer = applyMiddleware(...middleware, routerMiddleware(history), asyncAwait);
const enhancers = [middlewareEnhancer, devTools];
const composedEnhancers = compose(...enhancers);

const store = createStore(
  createRootReducers(history),
  composedEnhancers
);

export { env, store, history };
