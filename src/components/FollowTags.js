import React, { Component } from "react";

const tags = ['sad','badday','academicfailure','stress','parentalabuse','depression','testanxiety','anxiety','socialanxiety','selfloathing','suicidal','distressed','broken'];

class Profile extends Component {
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
          // textAlign: 'center',
          padding: '10px 0',
          margin: '20px',
          paddingBottom: '0',
          fontSize: '17px',
          fontWeight: 'lighter'
        }}>
          Select at least 3 tags which you would like to follow:
        </h1>
        <div className="followtags">
          {tags.map(tag => (
            <div className="followtag" key={tags.index} onClick={e => {
              e.target.classList.toggle('clicked');
              this.setState(prevState => {return {selected: prevState.selected + 1}});
            }}> {tag} </div>
          ))}
        </div>
        {this.state.selected >= 3 ? (
          <div className="proceed" onClick={() => window.location.assign('login')}><span>proceed</span></div>
        ) : ''}
      </div>
    );
  }
}

export default Profile;