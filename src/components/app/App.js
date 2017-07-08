import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../shell/footer/Footer';
import Main from '../shell/main/Main';
import Header from '../shell/header/Header';

class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
       </BrowserRouter> 
      </div>
    );
  }
}

export default App;