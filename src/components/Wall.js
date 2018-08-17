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
        <div className="post-title">{this.props.title}</div>
        <div className="post-date">{this.props.date}</div>
        <div className="post-tags">
        {this.props.tags.map(tag => (
          <span className="tag"> #{tag} </span>
        ))}
        </div>
        <div className="post-content">{this.props.content}</div>
        <div className="pm-button">
          
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
          overflowX: 'hidden',
          overflowY: 'auto',
          width: "100%",
          height: "450px"
          // border: '1px solid black',
        }}
      >
        <div className="posts" style={{
          width: "100%",
          height: "380px",
          // border: '1px solid red',
        }}>
          <Post
            title="jhask"
            date="an hour ago"
            tags={['hello', 'hellotwo', 'dpsrkp', 'hellothree', 'hello', 'hellotwo', 'dpsrkp', 'hellothree']}
            content='hahaha teri ma ki chut hahaha tera baap chakka skgjd ajdhsfgb sjhgfd jahdfg'
            />
            <Post
            title="jhask"
            date="an hour ago"
            tags={['hello', 'hellotwo', 'dpsrkp', 'hellothree', 'hello', 'hellotwo', 'dpsrkp', 'hellothree']}
            content='hahaha teri ma ki chut hahaha tera baap chakka skgjd ajdhsfgb sjhgfd jahdfg'
            />
            <Post
            title="jhask"
            date="an hour ago"
            tags={['hello', 'hellotwo', 'dpsrkp', 'hellothree', 'hello', 'hellotwo', 'dpsrkp', 'hellothree']}
            content='hahaha teri ma ki chut hahaha tera baap chakka skgjd ajdhsfgb sjhgfd jahdfg'
            />
        </div>
      </div>
    );
  }
}

export default Wall;
