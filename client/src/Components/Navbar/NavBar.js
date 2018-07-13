import React from "react";
import "./NavBar.css";

const NavBar = () => (
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="../../Pages/Home.js">fUsebx</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="../../Pages/About.js">
        About
      </NavItem>
      <NavItem eventKey={2} href="../../Pages/Login.js">
        Login
      </NavItem>
    </Nav>
    <Nav pullRight>
    <NavItem eventKey={3} href="../../Pages/Profile.js">
        Profile
      </NavItem>
      <NavItem eventKey={4} href="../../Pages/Contact.js">
        Dashboard
      </NavItem>
      <NavItem eventKey={5} href="#">
        Sign Out
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default NavBar;
