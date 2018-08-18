import React, { Component } from "react";

const tags = ['sad','badday','academicfailure','stress','parentalabuse','depression','testanxiety','anxiety','socialanxiety','selfloathing','suicidal','distressed','broken'];

class Profile extends Component {
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
          // textAlign: 'center',
          padding: '10px 0',
          margin: '20px',
          paddingBottom: '0',
          fontSize: '17px',
          fontWeight: 'lighter'
        }}>
          Select tags which you would like to follow:
        </h1>
        <div className="followtags">
          {tags.map(tag => (
            <div className="followtag" key={tags.index} onClick={e => e.target.classList.toggle('clicked')}> {tag} </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;