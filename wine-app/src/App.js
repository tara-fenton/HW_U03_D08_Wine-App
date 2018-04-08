import React, { Component } from 'react';
import './App.css';
import SideNav from './SideNav';
import ViewWindow from './ViewWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <ViewWindow />
      </div>
    );
  }
}

export default App;
