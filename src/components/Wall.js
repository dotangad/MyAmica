import React, { Component } from "react";

let posts = [
  {title: 'title 1', date: 'two days ago', tags: ['tagone', 'tagtwo', 'tagthree', 'tagfour', 'tagfive', 'tagsix'], content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa excepturi consequuntur, saepe sunt natus sint explicabo ut beatae molestias autem, error, quod mollitia neque esse nulla aliquam deleniti temporibus!'},
  {title: 'title 1', date: 'two days ago', tags: ['tagone', 'tagtwo', 'tagthree', 'tagfour', 'tagfive', 'tagsix'], content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa excepturi consequuntur, saepe sunt natus sint explicabo ut beatae molestias autem, error, quod mollitia neque esse nulla aliquam deleniti temporibus!'},
  {title: 'title 1', date: 'two days ago', tags: ['tagone', 'tagtwo', 'tagthree', 'tagfour', 'tagfive', 'tagsix'], content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa excepturi consequuntur, saepe sunt natus sint explicabo ut beatae molestias autem, error, quod mollitia neque esse nulla aliquam deleniti temporibus!'},
  {title: 'title 1', date: 'two days ago', tags: ['tagone', 'tagtwo', 'tagthree', 'tagfour', 'tagfive', 'tagsix'], content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa excepturi consequuntur, saepe sunt natus sint explicabo ut beatae molestias autem, error, quod mollitia neque esse nulla aliquam deleniti temporibus!'},
  {title: 'title 1', date: 'two days ago', tags: ['tagone', 'tagtwo', 'tagthree', 'tagfour', 'tagfive', 'tagsix'], content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsa excepturi consequuntur, saepe sunt natus sint explicabo ut beatae molestias autem, error, quod mollitia neque esse nulla aliquam deleniti temporibus!'},
];

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
          <button>Chat <i class="fas fa-comments"></i></button>
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
        {posts.map(post => (
          <Post {...post} />
        ))}
        </div>
      </div>
    );
  }
}

export default Wall;
