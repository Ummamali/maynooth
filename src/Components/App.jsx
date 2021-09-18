import React from 'react'
// The header
import Nav from './Header/Nav'

// Screens imported below
import Home from './Screens/Home/Home'

import { Route, Switch } from 'react-router-dom'
import Category from './Screens/Category/Category';
import Products from './Screens/Products/Products';
import Details from './Screens/Details/Details';

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category/:cat_name">
          <Category />
        </Route>
        <Route exact path="/products/:cat_name">
          <Products />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route path='*'>
          <p>This route does not exists</p>
        </Route>
      </Switch>
    </>
  );
}
