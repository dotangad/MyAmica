import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Wall from './Wall';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => (<Home />)}/>
      <Route exact path="/login" render={props => (<Login />)}/>
      <Route exact path="/wall" render={props => (<Wall />)}/>
      {/* <Route exact path="/profile" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/followtags" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/chat" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/psych" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/post" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/questionare" render={props => (<Wall />)}/> */}
    </Switch>
  </BrowserRouter>
);