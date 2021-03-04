import React from 'react';
import { renderRoutes } from 'react-router-config';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Cart, Favorites, Home, Menu, NotFound } from '../components/containers';
import Logout from '../components/containers/Logout';
import Timer from '../components/Timer';
import VideoPlayer from '../components/VideoPlayer';
import { UserForm } from '../controller';
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
    path: '/menu',
    exact: true,
    component: Menu,
  },
  {
    path: '/login',
    exact: true,
    component: UserForm,
  },
  {
    path: '/register',
    exact: true,
    component: UserForm,
  },
  {
    path: '/cart',
    exact: true,
    component: Cart,
  },
  {
    path: '/favorites',
    exact: true,
    component: Favorites,
  },
  {
    path: '/timer',
    exact: true,
    component: Timer,
  },
  {
    path: '/video',
    exact: true,
    component: VideoPlayer,
  },
  {
    path: '/logout',
    exact: true,
    component: Logout,
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
