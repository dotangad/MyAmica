import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";

const input = {
  display: "block",
  margin: "20px auto"
};

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-title">

        </div>
      </div>
    );
  }
}

class Wall extends Component {
  render() {
    return (
      <div
        className="register"
        style={{
          width: "100%",
          height: "450px"
          // border: '1px solid black',
        }}
      >
        <h1
          style={{
            textAlign: "center",
            padding: "10px 0",
            paddingTop: '20px',
            fontSize: "20px",
            lineheight: '22px',
            fontWeight: "lighter"
          }}
        >
          Wall
        </h1>
        <div className="posts" style={{
          width: "100%",
          height: "380px",
          // border: '1px solid red',
        }}>
        
        </div>
      </div>
    );
  }
}

export default Wall;
