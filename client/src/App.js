import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          fUsebx
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              About <span class="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Sign In
            </a>
          </div>
        </div>
      </nav>
      <div>BODY</div>
      <nav class="navbar navbar-default navbar-fixed-bottom">
  <div class="container">
  Footer
  </div>
</nav>
      </container>
    );
  }
}

export default App;
