import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
import Wall from '../components/Wall';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={false} profile={true} />
        <Wall />
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);