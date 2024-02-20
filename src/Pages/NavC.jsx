import React from "react";
import Nav from "../Components/Nav/Nav";

const NavC = props => {
  return <Nav handleLogout={props.handleLogout} />;
};

export default NavC;
