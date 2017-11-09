import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import asyncAwait from 'redux-async-await';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const middleware = [thunk];
const history = createHistory();

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(connectRouter(history)(rootReducer), enhancers, compose(
  applyMiddleware(...middleware, routerMiddleware(history), asyncAwait)));

export {
  store,
  history,
};
