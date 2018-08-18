import React, { Component } from "react";
import Drawer from './Drawer';

class Profile extends Component {
  render() {
    return (
      <div
        className="register"
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          width: "100%",
          height: "400px"
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
        <div className="profilelist" style={{marginBottom: '20px'}}>
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
        <Drawer />
      </div>
    );
  }
}

export default Profile;