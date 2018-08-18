import React, { Component } from "react";

class Header extends Component {
  render() {
    let h;
    if(this.props.profile && this.props.back) {
      h = (
        <header className="profile">
          <div className="left"><i class="fas fa-chevron-left" onClick={() => window.location.assign(this.props.backlink)}/></div>
          <div className="center">myamica</div>
          <div className="right" onClick={() => window.location.assign('profile')}><div></div></div>
        </header>
      );
    } else if (this.props.profile && !this.props.back) {
      h = (
        <header className="profile">
          <div className="left"></div>
          <div className="center">myamica</div>
          <div className="right" onClick={() => window.location.assign('profile')}><div></div></div>
        </header>
      );
    } else if (!this.props.profile && this.props.back) {
      h = (
        <header className="profile">
          <div className="left"><i class="fas fa-chevron-left" onClick={() => window.location.assign(this.props.backlink)}/></div>
          <div className="center">myamica</div>
          <div className="right" style={{background:'none'}}></div>
        </header>
      );
    } else {
      h = (
        <header className="noprofile">
          <span>myamica</span>
        </header>
      );
    }
    return h;
  }
}

export default Header;