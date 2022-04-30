import React from 'react';

import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import { history } from '@configs/history';
import { store } from '@store';
import { ENVIRONMENT } from '@utils/constants';
import { initDebuggerForTesting } from '@utils/helpers';
import theme from '@theme';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const withStrictMode: boolean = false;
const Container = withStrictMode ? React.StrictMode : React.Fragment;

root.render(
  <Container>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </HistoryRouter>
  </Container>,
);

if (ENVIRONMENT.isDev) {
  initDebuggerForTesting();
}

// serviceWorker.unregister();
serviceWorker.register({
  // eslint-disable-next-line no-console
  onSuccess: () => console.log('Service Worker Registered'),
  // eslint-disable-next-line no-console
  onUpdate: () => console.log('Service Worker Updated'),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
// reportWebVitals(ENVIRONMENT.isDev ? console.log : undefined);
reportWebVitals();
