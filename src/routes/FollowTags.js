import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
import FollowTags from '../components/FollowTags';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={true} backlink={'register'} profile={false} />
        <FollowTags />
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);