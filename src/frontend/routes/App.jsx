import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart, Favorites, Home, Menu, NotFound } from '../components/containers';
import Logout from '../components/containers/Logout';
import Layout from '../components/Layout';
import Timer from '../components/Timer';
import VideoPlayer from '../components/VideoPlayer';
import { useStateValue } from '../context';
import { UserForm } from '../controller';

const App = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.cookie = `theme=${theme}`;
    document.body.className = theme;
  }
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/login' component={UserForm} />
          <Route exact path='/register' component={UserForm} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/timer' component={Timer} />
          <Route exact path='/video' component={VideoPlayer} />
          <Route exact path='/logout' component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default App;
