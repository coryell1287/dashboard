import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import asyncAwait from 'redux-async-await';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const env = process.env.NODE_ENV;
const middleware = [thunk];
const basename = env === 'development' ? '' : '/oculus/';
const history = createHistory({ basename: basename });

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
  connectRouter(history)(rootReducer),
  undefined,
  composedEnhancers
);

export { env, store, history };

/*
const round = number => Math.round(number * 100) / 100
​
const monitorReducerEnhancer = createStore => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start)
​
    console.log('reducer process time:', diff);
​
    return newState
  }
​
  return createStore(monitoredReducer, initialState, enhancer)
}
​
export default monitorReducerEnhancer


const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}
​
export default logger


  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
​
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

*/
