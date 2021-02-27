import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Cart, Favorites, Home, NotFound } from '../components/containers';
import { UserForm } from '../controller';

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
    name: 'NotFound',
    component: NotFound,
  },
];

const RoutesManager = () => <div>{renderRoutes(serverRoutes())}</div>;

export default RoutesManager;
