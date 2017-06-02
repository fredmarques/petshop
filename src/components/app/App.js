import React, { Component } from 'react';
import './App.css';
import Footer from '../shell/footer/Footer';
import Main from '../shell/main/Main';
import Header from '../shell/header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;