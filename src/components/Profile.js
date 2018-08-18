import React, { Component } from "react";
// import {getUser} from '../helpers';

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
        <div className="bigprofileimg"><div></div></div>
        <h1 style={{
          textAlign: 'center',
          padding: '10px 0',
          margin: '0',
          paddingBottom: '0',
          fontSize: '25px',
          fontWeight: 'lighter'
        }}>
          Angad Singh
        </h1>
        <h4 style={{
          textAlign: 'center',
          padding: '3px 0',
          fontSize: '12px',
          marginTop: '0px',
          fontWeight: 'lighter',
          color: 'green'
        }}>1,024 ConciPoints</h4>
        <div className="profilelist">
          <div className="profileoption">
            <div className="icon"><i class="fas fa-sign-out-alt"></i></div>
            <div className="label">Logout</div>
          </div>
          <div className="profileoption">
            <div className="icon"><i class="fas fa-cog"></i></div>
            <div className="label">Settings</div>
          </div>
          <div className="profileoption">
            <div className="icon"><i class="fas fa-key"></i></div>
            <div className="label">Change password</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;