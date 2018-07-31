import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default () => (
  <footer className="footer">
    <a
      className="team-name"
      href="https://github.com/fUsebx"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="merge-conflict"> &copy; Copyright 2018. Merge Conflict</p>
    </a>
    <a className="footer-btn">
      <Link className="footer-btn-link" to="/contact">
        Contact
      </Link>
    </a>
  </footer>
);
