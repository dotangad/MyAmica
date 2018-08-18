import React, { Component } from 'react';

class Drawer extends Component {
  render() {
    return (
      <div className="drawer">
        <div className="section" onClick={() => window.location.assign('wall')}>
          <div className="icon"><i className="fas fa-newspaper"></i></div>
          <div className="label">wall</div>
        </div>
        <div className="section" onClick={() => window.location.assign('post')}>
          <div className="icon"><i className="fas fa-edit"></i></div>
          <div className="label">post</div>
        </div>
        <div className="section" onClick={() => window.location.assign('chat')}>
          <div className="icon"><i className="fas fa-comments"></i></div>
          <div className="label">chat</div>
        </div>
      </div>
    );
  }
}

export default Drawer;