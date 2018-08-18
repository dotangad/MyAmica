import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react';

const input = {
  display: 'block',
  margin: '20px auto'
};

class Post extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    }
  }

  render() {
    return (
      <div
        className="register"
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          width: "100%",
          height: "450px"
        }}
      >
        <h1 style={{
          textAlign: 'center',
          padding: '10px 0',
          margin: '20px',
          paddingBottom: '0',
          fontSize: '17px',
          fontWeight: 'lighter'
        }}>
          Post anonymous message
        </h1>
        <Input onChange={e => this.setState({name: e.target.value})} style={input} placeholder="Full name" />
        <Input onChange={e => this.setState({email: e.target.value})} style={input} placeholder="Email" />
        {/* TODO: tags */}
        <Button style={{
          display: 'block',
          margin: '20px auto',
        }} primary onClick={() => window.location.assign('followtags')}>Post</Button>
      </div>
    );
  }
}

export default Post;