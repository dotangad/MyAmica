import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
import Login from '../components/Login';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={false} profile={false} />
        <Login />
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);