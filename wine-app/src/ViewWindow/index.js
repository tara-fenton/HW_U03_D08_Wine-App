import React, {Component} from "react";
import WineList from '../WineList';
import AddWine from '../AddWine';
import EditWine from '../EditWine';

class ViewWindow extends Component {

  constructor(props) {
    super()
    this.state = {
      view: 'list',
    }
  }
  render () {
    let wineView = null;
    if (this.state.view === 'list') {
      wineView = <WineList />;
    }

    return (
      
      <div className="ViewWindow">
        {wineView}
      </div>
    );
  }

};

export default ViewWindow;
