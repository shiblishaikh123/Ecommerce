import React, { Component } from "react";
import NavC from "./Pages/NavC";

class Layout extends Component {
  render() {
    return (
      <>
        <NavC handleLogout={this.props.handleLogout} />
        {this.props.children}
      </>
    );
  }
}
export default Layout;
