import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, NotFound } from '../components/containers';
import { useStateValue } from '../context';

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
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
