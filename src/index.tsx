import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { store } from './store';
import * as serviceWorker from './serviceWorker';
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
      <App />
    </Provider>
  </React.StrictMode>,
);

serviceWorker.unregister();
