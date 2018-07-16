import React from "react";
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
      <a className="nav-link active" href="">
        Sign Out
      </a>
      <a className="nav-link active" href="/Dashboard">
        Dashboard
      </a>
      <a className="nav-link active" href="/Profile">
        Profile
      </a>
      <a className="nav-link active" href="/LoginForm">
        Sign In
      </a>
      <a className="nav-link active" href="/About">
        About
      </a>
    </div>
  </nav>
);
