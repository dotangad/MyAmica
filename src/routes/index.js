import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Wall from './Wall';
import Profile from './Profile';
import FollowTags from './FollowTags';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => (<Home />)}/>
      <Route exact path="/login" render={props => (<Login />)}/>
      <Route exact path="/wall" render={props => (<Wall />)}/>
      <Route exact path="/profile" render={props => (<Profile />)}/>
      <Route exact path="/followtags" render={props => (<FollowTags />)}/>
      {/* <Route exact path="/post" render={props => (<Wall />)}/> /*/}
      {/* <Route exact path="/chat" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/questionare" render={props => (<Wall />)}/> */}
      {/* <Route exact path="/psych" render={props => (<Wall />)}/> */}
    </Switch>
  </BrowserRouter>
);