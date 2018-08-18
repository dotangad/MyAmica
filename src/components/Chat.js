import React, { Component } from "react";
import Drawer from "./Drawer";
import { fire } from "../helpers";

class History extends Component {
  render() {
    return (
      <div
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          width: "100%",
          height: "350px"
        }}
      >
        test
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
        <input
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
    this.setState({ msg: e.target.value });
  };
  onSubmit = e => {
    const user = localStorage.getItem("userID");
    const { msg } = this.state;
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
          overflowY: "auto",
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
