import React, { Component } from 'react';
import Phone from '../components/Phone';
import Header from '../components/Header';
// import Register from '../components/Register';

class Home extends Component {
  render() {
    return (
      <div>
        <Header back={false} profile={true} />
        {/* <Register /> */}
      </div>
    );
  }
}

export default props => (<Phone component={Home} />);