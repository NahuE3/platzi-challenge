//Import de librerias.
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useStateValue } from '../context';
//Import de vistas.
import {
  NotFound,
  Login,
  SignUp,
  Home,
  Recipes,
  Recipe,
  Week,
  Favorites,
  Order,
  FollowingOrder,
  Cart,
  Checkout,
  Address,
  Payment,
} from '../components/containers';

const App = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.cookie = `theme=${theme}`;
    document.body.className = theme;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/recipe/:name" component={Recipe} />
        <Route exact path="/week" component={Week} />
        <Route exact path="/wishlist" component={Favorites} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/order:key" component={FollowingOrder} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/address" component={Address} />
        <Route exact path="/checkout/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
