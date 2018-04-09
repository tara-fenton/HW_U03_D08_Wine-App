import React from "react";

const WineNav = props => {
  // Map over wines array
  let wineItems = props.wines.map(wine => (
    // create div for each wine in nav
		// call sendWineSelected to send id to SideNav
    <div key={wine.id} id={wine.id} className="noselect" onClick={props.sendWineSelected}>
      {wine.name}
    </div>
  ));

  return <div className="wine-list">{wineItems}</div>;
};

export default WineNav;
