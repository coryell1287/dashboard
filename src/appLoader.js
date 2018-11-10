import React from 'react';
import { connectRouter } from 'connected-react-router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'api/serviceConfig';

import coreTheme from 'styles/theme/material-ui-theme';
import { store, history } from 'store/configureStore';
import App from 'routes';
import rootReducer from 'reducers';
import 'styles/appStyles.css';

const theme = createMuiTheme(coreTheme);

const renderUI = (Component) => {
  render(
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Provider store={store}>
          <Component/>
        </Provider>
      </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('app'),
  );
};

renderUI(App);

if (module.hot) {
  module.hot.accept('routes', () => renderUI(App));
  module.hot.accept('reducers', () => store.replaceReducer(connectRouter(history)(rootReducer)));
}
