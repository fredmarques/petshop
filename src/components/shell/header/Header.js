import React, { Component } from 'react';
import logo from '../../../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <span style={{fontSize: 30, color: "#42cef4"}}>PetCare</span>
      </div>
    );
  }
}

export default Header;