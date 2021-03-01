import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from './context';
import App from './routes/App';
import globalEs from './translations/es/global.json';
import globalEn from './translations/en/global.json';
import './index.css';;

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const preloaded = document.getElementById('preloadedState');
const app = document.getElementById('app');
delete window.__PRELOADED_STATE__;
document.body.removeChild(preloaded);

i18next.init({
  lng: preloadedState.language || 'es',
  interpolation: { escapeValue: false },
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider initialState={preloadedState}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </I18nextProvider>,
  app,
);
