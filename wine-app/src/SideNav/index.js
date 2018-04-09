import React, { Component } from "react";
import WineNav from '../WineNav'
class SideNav extends Component {
  constructor(props) {
		super(props);
		this.state = {
      wineDataLoaded: false,
			wines: null,
      wineSelected: null
		};
		this.sendWineSelected = this.sendWineSelected.bind(this);
	}
  // check if the component mounted
	componentDidMount() {
		// fetch the data from the api
		fetch('http://localhost:3000/api/wines')
			.then(response => response.json())
			.then(data => {
				// set the state of the movie list to display on this list component
				this.setState({
					wineDataLoaded: true,
					wines: data
				});
			});
	}
  // wine selected in WineNav
  sendWineSelected(evt) {
    const wineId = evt.target.id;
    // place holder for function to come
    console.log('clicked send wine selected',wineId)
    this.setState({
      wineSelected:  wineId
    });
    this.props.getWineSelected(wineId);
  }

  render() {
		return (
      <div className="SideNav">
        <h1>List of Wines</h1>

        {/* condition statement to check for the wine data loaded */}
				{this.state.wineDataLoaded ? (
					<WineNav wines={this.state.wines} sendWineSelected={this.sendWineSelected}
           />
				) : (
					<p>loading</p>
				)}

        <button>Add Wine</button>
      </div>
    );
  }
}

export default SideNav;
