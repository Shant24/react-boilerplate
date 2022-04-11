import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { store } from './store';
import { history } from './configs/history';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from 'assets/styles/globalStyles';
import App from './App';

/**
 * @description it is the entry point of the application
 * @returns root element
 */
const getRootElement = () => {
  let rootElement = document.getElementById('root');
  if (rootElement) {
    return rootElement;
  }
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  return div;
};

const root = ReactDOM.createRoot(getRootElement());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <GlobalStyles />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);

// serviceWorker.unregister();
serviceWorker.register({
  onSuccess: () => console.log('Service Worker Registered'),
  onUpdate: () => console.log('Service Worker Updated'),
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
