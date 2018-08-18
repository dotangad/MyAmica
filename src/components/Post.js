import React, { Component } from "react";
import { Input, Button, Form, TextArea } from "semantic-ui-react";
import Drawer from "./Drawer";
import { fire } from "../helpers";

const input = {
  display: "block",
  margin: "20px auto"
};
const tags = [
  "academicfailure",
  "stress",
  "parentalabuse",
  "depression",
  "testanxiety",
  "socialanxiety",
  "selfloathing",
  "suicidal"
];

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      tags: []
    };
  }

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
        <h1
          style={{
            textAlign: "center",
            padding: "10px 0",
            margin: "20px",
            paddingBottom: "0",
            fontSize: "17px",
            fontWeight: "lighter"
          }}
        >
          Post anonymous message
        </h1>
        <Form style={{ padding: "0 20px" }}>
          <Input
            onChange={e => this.setState({ title: e.target.value })}
            style={input}
            placeholder="Title"
          />
          <TextArea
            onChange={e => this.setState({ content: e.target.value })}
            style={{ ...input, fontFamily: "Avenir, Segoe UI, Ubuntu" }}
            placeholder="Content"
          />
          <h1
            style={{
              // textAlign: 'center',
              padding: "0",
              margin: "20px 0",
              marginBottom: "7px",
              paddingBottom: "0",
              fontSize: "14px",
              fontWeight: "lighter"
            }}
          >
            Select tags:
          </h1>
          <div className="followtags" style={{ padding: "0", marginTop: "0" }}>
            {tags.map(tag => (
              <div
                className="followtag"
                key={tags.indexOf(tag)}
                style={{ fontSize: "12px" }}
                onClick={e => {
                  e.target.classList.toggle("clicked");
                  if (this.state.tags.indexOf(tag) != -1) {
                    this.setState(prevState => {
                      const tags = prevState.tags;
                      tags.splice(prevState.tags.indexOf(tag), 1);
                      return { tags };
                    });
                  } else {
                    this.setState(prevState => {
                      return {
                        tags: prevState.tags.concat(tag)
                      };
                    });
                  }
                }}
              >
                {" "}
                {tag}{" "}
              </div>
            ))}
          </div>
          <Button
            style={{
              display: "block",
              margin: "20px auto"
            }}
            primary
            onClick={() =>
              fire
                .database()
                .ref("posts")
                .push({
                  title: this.state.title,
                  tags: this.state.tags,
                  content: this.state.content
                })
            }
          >
            Post
          </Button>
        </Form>
        <Drawer />
      </div>
    );
  }
}

export default Post;
