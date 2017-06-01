import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Content from '../content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Navigation/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;

        // <Navigation />
        // <Content />
        // <Footer />
