import React from "react";

import "./SideDrawer.css";
import Connector from "../Connector/Connector";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  // if else conditional render signup or in
  return (
    <div className={drawerClasses}>
      <Connector />
      Hi
    </div>
  );
};

export default SideDrawer;