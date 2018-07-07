import React from 'react';
import { connectRouter } from 'connected-react-router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'api/serviceConfig';

import coreTheme from 'styles/theme/material-ui-theme';
import { store, history } from 'store/configureStore';
import { ReactHelmet } from 'containers';
import App from 'routes';
import rootReducer from 'reducers';

const theme = createMuiTheme(coreTheme);
import styles from 'styles/appStyles';

console.log(styles);

const renderUI = (Component) => {
  render(
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <ReactHelmet>
          <Provider store={store}>
            <Component/>
          </Provider>
        </ReactHelmet>
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
