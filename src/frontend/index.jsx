import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from './context';
import App from './routes/App';
import './index.css';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const preloaded = document.getElementById('preloadedState');
const app = document.getElementById('app');
delete window.__PRELOADED_STATE__;
document.body.removeChild(preloaded);

ReactDOM.render(
  <Provider initialState={preloadedState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app,
);
