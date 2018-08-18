import React, { Component } from 'react';

export default class Phone extends Component {
  render() {
    return (
      <div className="content">
        <img src="/phone.png" className="phoneimg" alt='' />
        <div className="container">
          <this.props.component />
        </div>
      </div>
    );
  }
}