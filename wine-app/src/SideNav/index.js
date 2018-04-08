import React from "react";

const SideNav = props => {
  return (
    <div className="SideNav">
      <form onSubmit={props.createSideNav}>
        <input type="text" name="name" onChange={props.handleNewSideNav} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SideNav;
