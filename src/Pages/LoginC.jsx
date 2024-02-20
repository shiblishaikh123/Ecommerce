import React from "react";
import Login from "../Components/Login/Login";

const LoginC = (props) => {
  return <Login handleLogin={props.handleLogin} />;
};

export default LoginC;
