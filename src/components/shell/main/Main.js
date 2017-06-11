import React, { Component } from 'react';
import Content from '../content/Content';
import Navigation from '../navigation/Navigation';
import { BrowserRouter}  from 'react-router-dom';
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mainContent">
          <Navigation />
          <Content/>
        </div>
      </BrowserRouter> 
    );
  }
}

export default Main;