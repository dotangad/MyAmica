import React, { Component } from "react";
import Drawer from "./Drawer";
import { fire } from "../helpers";

function checkOther(chat) {
  const uid = localStorage.getItem('userID');
  return chat.user != uid ? true : false;
}

class ChatBubble extends Component {
  render() {
    return (
      <div className={this.props.other ? "chatbubble opp" : "chatbubble my"}>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

class History extends Component {
  constructor() {
    super();
    this.state = {
      chats: []
    };
  }

  componentWillMount() {
    const chatRef = fire.database().ref('chats');
    chatRef.on('child_added', s => this.setState(ps => {
      return {chats: ps.chats.concat(s.val())}
    }));
  }

  render() {
    // this.state.chats.reverse();
    const myUserID = localStorage.getItem('userID');
    console.log(myUserID);
    console.log(this.state.chats);
    return (
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          width: "100%",
          height: "350px",
          padding: "10px"
        }}
      >
      {this.state.chats.map(chat => (<ChatBubble key={this.state.chats.indexOf(chat)} other={checkOther(chat)} message={chat.msg} />))}
      </div>
    );
  }
}

class ChatInput extends Component {
  render() {
    return (
      <div
        style={{
          height: "40px",
          border: "1px solid #aaa",
          width: "95%",
          margin: "0 auto",
          marginBottom: "10px",
          borderRadius: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <input id="msg"
          onChange={this.props.onChange}
          style={{
            marginLeft: "5%",
            borderRadius: "10px",
            width: "75%",
            border: "none",
            height: "38px",
            fontFamily: "Avenir, Segoe UI, Ubuntu"
          }}
          type="text"
          placeholder="Message"
        />
        <a
          onClick={this.props.onSubmit}
          style={{
            marginRight: "10px",
            cursor: "pointer"
          }}
        >
          Send
        </a>
      </div>
    );
  }
}

class Post extends Component {
  constructor() {
    super();
    this.state = {
      msg: ""
    };
  }

  onChange = e => {
    
  };
  onSubmit = e => {
    const user = localStorage.getItem("userID");
    const msg = e.target.parentNode.childNodes[0].value;
    e.target.parentNode.childNodes[0].value = '';
    fire
      .database()
      .ref("chats")
      .push({ user, msg });
  };

  render() {
    return (
      <div
        className="register"
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
          width: "100%",
          height: "400px"
        }}
      >
        <History />
        <ChatInput onChange={this.onChange} onSubmit={this.onSubmit} />
        <Drawer />
      </div>
    );
  }
}

export default Post;
