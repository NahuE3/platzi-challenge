import React from 'react';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Home, NotFound } from '../components/containers';
import globalEs from '../translations/es/global.json';
import globalEn from '../translations/en/global.json';

i18next.init({
  lng: 'es',
  interpolation: { escapeValue: false },
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
});

const serverRoutes = () => [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

const RoutesManager = () => (
  <I18nextProvider i18n={i18next}>
    <div>{renderRoutes(serverRoutes())}</div>
  </I18nextProvider>
);

export default RoutesManager;
