import React from 'react';
import { connectRouter } from 'connected-react-router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'api/serviceConfig';

import defaultTheme from 'styles/theme/material-ui-theme';
import { store, history } from 'store/configureStore';
import { ReactHelmet } from 'containers';
import App from 'routes';
import rootReducer from 'reducers';

injectTapEventPlugin();
const theme = getMuiTheme(defaultTheme);


const renderUI = (Component) => {
  render(
    <MuiThemeProvider muiTheme={theme}>
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
