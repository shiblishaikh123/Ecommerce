import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {

  render() {
    let existingUser = localStorage.getItem("Loggedin");

    return (
      <div className="nav-main flex justify-between text-2xl p-5">
        <div className="nav-left">
          <Link to="/">Logo</Link>
        </div>
        <div className="nav-right flex gap-4">
          <Link to="/Product">Product</Link>
          <Link to="/Order">Order</Link>
          <Link to="/Cart">Cart</Link>
          {existingUser ? (
            <h1 className="cursor-pointer" onClick={this.props.handleLogout}>Logout</h1>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
