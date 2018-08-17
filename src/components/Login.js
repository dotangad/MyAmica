import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

const input = {
  display: 'block',
  margin: '20px auto'
};

class Login extends Component {
  render() {
    return (
      <div className="register" style={{
        width: '100%',
        height: '450px',
        // border: '1px solid black',
      }}>
      <div style={{
        position: 'relative',
        // border: '1px solid black',
        top: '50%',
        transform: 'translateY(-50%)'
      }}>
        <h1 style={{
          textAlign: 'center',
          padding: '10px 0',
          fontSize: '20px',
          fontWeight: 'lighter'
        }}>
          Login
        </h1>
        <Input onChange={e => this.setState({email: e.target.value})} style={input} placeholder="Email" />
        <Input onChange={e => this.setState({password: e.target.value})} style={input} placeholder="Password" type="password"/>
        <Button style={{
          display: 'block',
          margin: '20px auto',
        }} primary onClick={() => window.location.assign('wall')}>Login</Button>
        </div>
      </div>
    );
  }
}

export default Login;