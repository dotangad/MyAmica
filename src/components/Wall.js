import React, { Component } from "react";
import Drawer from './Drawer';
import {fire} from '../helpers';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="post-title">{this.props.title}</div>
        <div className="post-date">{this.props.date}</div>
        <div className="post-tags">
        {this.props.tags.map(tag => (
          <span key={this.props.tags.indexOf(tag)} className="tag"> {tag} </span>
        ))}
        </div>
        <div className="post-content">{this.props.content}</div>
        <div className="pm-button">
          <button onClick={() => window.location.assign('chat')}>Chat <i className="fas fa-comments"></i></button>
        </div>
      </div>
    );
  }
}

class Wall extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    const postsRef = fire.database().ref('posts');
    postsRef.on('child_added', snapshot => {
      console.log(snapshot.val());
      this.setState(prevState => {return {posts: prevState.posts.concat(snapshot.val())}});
    });
  }

  render() {
    this.state.posts.reverse();
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
        {this.state.posts.map(post => (
          <Post {...post} />
        ))}
        </div>
        <Drawer />
      </div>
    );
  }
}

export default Wall;
