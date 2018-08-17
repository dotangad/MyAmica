import React, { Component } from "react";

class Header extends Component {
  render() {
    return this.props.profile ? (
      <header className="profile">
        <div className="left">{this.props.back ? (<i class="fas fa-chevron-left"></i>) : '' }</div>
        <div className="center">MyAmica</div>
        <div className="right"><div></div></div>
      </header>
    ) : (
      <header className="noprofile">
        <span>MyAmica</span>
      </header>
    );
  }
}

export default Header;