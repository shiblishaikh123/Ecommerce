import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import Product from "./Components/Product/Product";
import LoginC from "./Pages/LoginC";
import Home from "./Components/Home/Home";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const existingUser = localStorage.getItem("Loggedin");
    if (existingUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("Loggedin");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Router>
        <Layout handleLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<Home />} />
            {isLoggedIn ? (
              <Route
                path="/Product"
                element={<Product isLoggedIn={isLoggedIn} />}
              />
            ) : (
              <Route
                path="/Login"
                element={<LoginC handleLogin={handleLogin} />}
              />
            )}
            {!isLoggedIn && (
              <Route path="/Product" element={<Navigate to="/Login" />} />
            )}
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
