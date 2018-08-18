import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
import Post from '../components/Post';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={true} backlink={'wall'} profile={true} />
        <Post />
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);