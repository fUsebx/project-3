import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default () => (
  <footer className="footer">
    <a className="team-name">
      <Link to="https://github.com/fUsebx" target="_blank">
        &copy; Copyright 2018. Merge Conflict
      </Link>
    </a>
    <a className="footer-btn">
      <Link to="/contact">Contact</Link>
    </a>
  </footer>
);
