import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isLoggedIn, handleLogout, isVisible, toggleSidebar }) => {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/login");
  };
  return (
    <div
      className={`sidebar-wrapper ${
        isVisible ? "sidebar-visible" : "sidebar-hidden"
      }`}
    >
      <div className="list-group list-group-flush navbar">
        <ul className="navbar-nav d-flex justify-content-start">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link link" to="/dashboard">
                  <i class="bi bi-person-rolodex"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/shorten">
                  <i class="bi bi-search"></i> Shorten URL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" onClick={logout} to="/">
                  <i class="bi bi-box-arrow-left"></i> Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a
                  className="nav-link link"
                  target="_blank"
                  href="https://github.com/getciya7/url-shortener-frontend/blob/main/README.md"
                >
                  <i class="bi bi-markdown"></i> Readme
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
