import React from 'react';
import { connectRouter } from 'connected-react-router';
import { render } from 'react-dom';
import ThemeProvider from 'styles/react-toolbox/lib/ThemeProvider';
import { Provider } from 'react-redux';

import { store, history } from 'store/configureStore';
import ReactHelmet from 'containers/ReactHelmet';
import Routes from 'routes';
import rootReducer from 'reducers';
import HotLoader from './reactHotLoader';

const renderUI = (App) => {
  render(
    <ThemeProvider>
      <HotLoader>
        <ReactHelmet>
          <Provider store={store}>
            <App />
          </Provider>
        </ReactHelmet>
      </HotLoader>
    </ThemeProvider>,
    document.getElementById('app'),
  );
};

renderUI(Routes);

if (module.hot) {
  module.hot.accept('routes', () => renderUI(Routes));
  module.hot.accept('reducers', () => store.replaceReducer(connectRouter(history)(rootReducer)));
}
