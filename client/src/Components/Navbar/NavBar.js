import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default () => (
  <nav className="navbar navbar-static-top">
    <div className="container nav-container">
      <a className="logo-btn" href="/Home">
        <img
          className="img img-logo"
          src={require("./assets/logo.png")}
          alt="logo"
        />
      </a>
      <a className="nav-link" active> 
        <Link to="/">Sign Out</Link>
      </a>
      <a className="nav-link" active> 
        <Link to="/dashboard">Dashboard</Link>
      </a>
      <a className="nav-link" active> 
        <Link to="/profile">Profile</Link>
      </a>
      <a className="nav-link" active> 
        <Link to="/create_account">Create Account</Link>
      </a>
      <a className="nav-link" active> 
        <Link to="/login">Sign In</Link>
      </a>
      <a className="nav-link" active> 
        <Link to="/about">About</Link>
      </a>
    </div>
  </nav>
);