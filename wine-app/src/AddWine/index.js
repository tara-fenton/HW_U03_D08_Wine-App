import React from "react";

const AddWine = props => {
  return (
    <div className="AddWine">
      <h1>Add Wine</h1>
      <input type='text' name='name' placeholder='name'></input>
      <input type='text' name='year' placeholder='year'></input>
      <input type='text' name='grapes' placeholder='grapes'></input>
      <input type='text' name='country' placeholder='country'></input>
      <input type='text' name='region' placeholder='region'></input>
      <input type='text' name='description' placeholder='description'></input>
      <input type='text' name='picture' placeholder='picture'></input>
      <input type='text' name='price' placeholder='price'></input>
      <button>Submit</button>
    </div>
  );
};

export default AddWine;
