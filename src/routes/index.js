import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Phone from '../components/Phone';
import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => (<Home />)}/>
      <Route exact path="/hello" render={props => <div>hello world</div>}/>
    </Switch>
  </BrowserRouter>
);