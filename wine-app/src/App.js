import React, { Component } from 'react';
import './App.css';
import SideNav from './SideNav';
import ViewWindow from './ViewWindow';

class App extends Component {
  constructor(props) {
    super()
    // add, list, detail, edit
    this.state = {
      view: 'detail',
    }
    // this.createWine = this.createWine.bind(this);
  }
  getWineSelected(id) {
    console.log('called in app on change getWineSelected ',id)
  }
  //this.props.sendText(e.target.value);
  render() {
    return (
      <div className="App">
        <SideNav
        getWineSelected={this.getWineSelected}/>
        <ViewWindow view={this.state.view}/>
      </div>

    );
  }
}

export default App;
