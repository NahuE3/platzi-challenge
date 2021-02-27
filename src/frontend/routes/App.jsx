import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart, Favorites, Home, NotFound } from '../components/containers';
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
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/login' component={UserForm} />
      <Route exact path='/register' component={UserForm} />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/favorites' component={Favorites} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
  };

export default App;
