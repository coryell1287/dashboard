import React from 'react';
import { connectRouter } from 'connected-react-router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ApolloProvider } from 'react-apollo';

import client from 'apolloClient';
import coreTheme from 'styles/theme/material-ui-theme';
import { store, history } from 'store/configureStore';
import App from 'routes';
import rootReducer from 'reducers';

import 'styles/appStyles.css';
const theme = createMuiTheme(coreTheme);


const renderUI = () => {
  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Provider store={store}>
            <App/>
          </Provider>
        </AppContainer>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('app'),
  );
};

renderUI();

if (module.hot) {
  module.hot.accept('routes', () => renderUI());
  module.hot.accept('reducers', () => store.replaceReducer(connectRouter(history)(rootReducer)));
}

renderUI();
