import React from "react";

const AddWine = props => {
  return (
    <div className="AddWine">
      <h1>Add Wine</h1>
      <form onSubmit={props.createWine}>
        <input type='text' name='name' placeholder='name'  onChange={props.handleNewWineName}></input>
        <input type='text' name='year' placeholder='year' onChange={props.handleNewWineYear}></input>
        <input type='text' name='grapes' placeholder='grapes'
          onChange={props.handleNewWineGrapes}></input>
        <input type='text' name='country' placeholder='country' onChange={props.handleNewWineCountry}></input>
        <input type='text' name='region' placeholder='region'
          onChange={props.handleNewWineRegion}></input>
        <input type='text' name='description' placeholder='description' onChange={props.handleNewWineDescription}></input>
        <input type='text' name='picture' placeholder='picture' onChange={props.handleNewWinePicture}></input>
        <input type='text' name='price' placeholder='price' onChange={props.handleNewWinePrice}></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddWine;
