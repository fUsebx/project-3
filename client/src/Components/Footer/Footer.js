import React from "react";
import { Link } from "react-router-dom";
import {FormBtn} from '../../Components/Form/FormBtn'
import "./Footer.css";

export default () => (
  <footer className="footer">
    <Link
      className="team-name"
      to={"https://github.com/fUsebx"}
      target="_blank"
      rel="noopener noreferrer"
    >
      &copy; Copyright 2018. Merge Conflict
    </Link>
    <FormBtn className="footer-btn">
      <Link className="footer-btn-link" to="/contact">Contact</Link>
    </FormBtn>
  </footer>
);
