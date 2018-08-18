import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
import Profile from '../components/Profile';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={true} backlink={'wall'} profile={false} />
        <Profile />
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);