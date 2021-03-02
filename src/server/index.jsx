import axios from 'axios';
import React from 'react';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ENV, PORT, API_URL } from './config';
import { Provider } from '../frontend/context';
import ServerApp from '../frontend/routes/ServerApp';
// import InitialState from './utils/initialState';
import AuthRouter from './routes/auth';
import RecipesRouter from './routes/recipes';
import FavoritesRouter from './routes/favorites';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

const setResponse = (html, preloadedState) => (
  `<!DOCTYPE html>
  <html lang="es">
    <head>
      <base href="/" />
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="app.css" />
      <title>Platzi Olimpiadas</title>
    </head>
    <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')}>
      <div id="app">${html}</div>
      <div id="modal"></div>
      <script type="text/javascript" id="preloadedState">
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
      </script>
      <script type="text/javascript" src="app.js"></script>
    </body>
  </html>`
);

const getData = async ({ id, token, route }) => {
  const url = id ? `${API_URL}/users/${id}/${route}/` : `${API_URL}/${route}/`;
  if (token) {
    const data = await axios({
      url,
      headers: { Authorization: `Bearer ${token}` },
      method: 'get',
    }).then(({ data }) => {
      return data;
    });
    return data;
  }
  const data = await axios({
    url,
    method: 'get',
  }).then(({ data }) => {
    return data;
  });
  return data;
};

const renderApp = async (req, res) => {
  const { token, theme, currency, language, id, email, type, username } = req.cookies;
  const recipes = await getData({ route: 'recipes' });
  const initialState = {
    user: {},
    wishList: [],
    theme: theme || 'light',
    currency: currency || 'USD',
    language: language || 'es',
    cart: { size: 0, recipes: []},
    recipes: recipes || { count: 0, next: null, previous: null, results: [] },
    coin: [
      { format: 'en-US', currency: 'USD', value: 1 },
      { format: 'es-MX', currency: 'MXN', value: 20.86 },
      { format: 'es-CO', currency: 'COP', value: 3647 },
    ],
  }
  if (token && id && email && type && username) {
    const user = { id, email, type, username, token };
    const wishList = await getData({ id, token, route: 'favorites' });
    initialState.user = user;
    initialState.wishList = wishList.results || [];
  }

  const html = renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url} context={{}}>
        <ServerApp />
      </StaticRouter>
    </Provider>,
  );
  res
    .set('Content-Security-Policy', "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .send(setResponse(html, initialState));
};

AuthRouter(app);
RecipesRouter(app);
FavoritesRouter(app);
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`\n${ENV} server running on Port ${PORT}\n`);
});
