import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import URLShortener from "./components/URLShortener";
import Dashboard from "./components/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Activate from "./components/Activate";
import ResetPassword from "./components/ResetPassword";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <Router>
      <nav className="navbar navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          URL Shortener
        </Link>
      </nav>
      <div className="d-flex">
        <Sidebar
          isVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <div
          className={`page-content-wrapper ${
            isSidebarVisible ? "overlay" : ""
          }`}
        >
          <div className="App">
            <ToastContainer />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/activate/:token" element={<Activate />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/shorten" element={<URLShortener />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
