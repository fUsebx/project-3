import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default () => (
  <nav className="navbar navbar-static-top">
    <div className="container nav-container">
      <a className="logo-btn" active>
        <Link to="/home">
        <img
          className="img img-logo"
          src={require("./assets/logo.png")}
          alt="logo"
        />
        </Link>
      </a>
      <button className="nav-link" active> 
        <Link className="nav-btn" to="/">Sign Out</Link>
      </button>
      <button className="nav-link" active> 
        <Link className="btn-nav" to="/dashboard">Dashboard</Link>
      </button>
      <button className="nav-link" active> 
        <Link className="btn-nav" to="/profile">Profile</Link>
      </button>
      <button className="nav-link" active> 
        <Link className="btn-nav" to="/create_account">Create Account</Link>
      </button>
      <button className="nav-link" active> 
        <Link className="btn-nav" to="/login">Sign In</Link>
      </button>
      <button className="nav-link" active> 
        <Link className="btn-nav" to="/about">About</Link>
      </button>
    </div>
  </nav>
);