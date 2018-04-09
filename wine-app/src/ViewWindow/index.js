import React, {Component} from "react";
import WineList from '../WineList';
import AddWine from '../AddWine';
import WineDetail from '../WineDetail';
import EditWine from '../EditWine';

class ViewWindow extends Component {

  constructor(props) {
    super()
    this.state = {
      newWineName: '',
      newWineYear: '',
      newWineGrapes: '',
      newWineCountry: '',
      newWineRegion: '',
      newWineDescription: '',
      newWinePicture: '',
      newWinePrice: ''
    }
    this.createWine = this.createWine.bind(this);
    this.handleNewWineName = this.handleNewWineName.bind(this);
    this.handleNewWineYear = this.handleNewWineYear.bind(this);
    this.handleNewWineGrapes = this.handleNewWineGrapes.bind(this);
    this.handleNewWineCountry = this.handleNewWineCountry.bind(this);
    this.handleNewWineRegion = this.handleNewWineRegion.bind(this);
    this.handleNewWineDescription = this.handleNewWineDescription.bind(this);
    this.handleNewWinePicture = this.handleNewWinePicture.bind(this);
    this.handleNewWinePrice = this.handleNewWinePrice.bind(this);
  }

  createWine(evt) {
    console.log('creatte wine function called ')
    evt.preventDefault();
    const newWineName = this.state.newWineName;
    const newWineYear = this.state.newWineYear;
    const newWineGrapes = this.state.newWineGrapes;
    const newWineCountry = this.state.newWineCountry;
    const newWineRegion = this.state.newWineRegion;
    const newWineDescription = this.state.newWineDescription;
    const newWinePicture = this.state.newWinePicture;
    const newWinePrice = this.state.newWinePrice;
    const data = { name: newWineName, year: newWineYear, grapes: newWineGrapes, country: newWineCountry, region: newWineRegion, description: newWineDescription, picture: newWinePicture, price: newWinePrice};
    console.log("data in wine view ",data)
    fetch(`http://localhost:3000/api/wines`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
  handleNewWineName(evt) {
    console.log(evt.target.value)
    this.setState({
      newWineName: evt.target.value})
  }
  handleNewWineYear(evt) {
    this.setState({
      newWineYear: evt.target.value})
  }
  handleNewWineGrapes(evt) {
    this.setState({
      newWineGrapes: evt.target.value})
  }
  handleNewWineCountry(evt) {
    this.setState({
      newWineCountry: evt.target.value})
  }
  handleNewWineRegion(evt) {
    this.setState({
      newWineRegion: evt.target.value})
  }
  handleNewWineDescription(evt) {
    this.setState({
      newWineDescription: evt.target.value})
  }
  handleNewWinePicture(evt) {
    this.setState({
      newWinePicture: evt.target.value})
  }
  handleNewWinePrice(evt) {
    this.setState({
      newWinePrice: evt.target.value})
  }
  render () {
    let wineView = null;
    if (this.props.view === 'list') {
      wineView = <WineList />;
    } else if (this.props.view === 'add') {
      wineView = <AddWine createWine={this.createWine}
        handleNewWineName={this.handleNewWineName}
        handleNewWineYear={this.handleNewWineYear}
        handleNewWineGrapes={this.handleNewWineGrapes}
        handleNewWineCountry={this.handleNewWineCountry}
        handleNewWineRegion={this.handleNewWineRegion}
        handleNewWineDescription={this.handleNewWineDescription}
        handleNewWinePicture={this.handleNewWinePicture}
        handleNewWinePrice={this.handleNewWinePrice}
      />;
    } else if (this.props.view === 'detail') {
      wineView = <WineDetail />;
    }

    return (

      <div className="ViewWindow">
        {wineView}
      </div>
    );
  }

};

export default ViewWindow;
