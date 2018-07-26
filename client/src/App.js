import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Pages/About";
import ContactForm from "./Pages/ContactTest";
import CreateAccount from "./Pages/CreateAccount";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Jumbotron from "./Components/Jumbotron";
import LoginForm from "./Pages/LoginForm";
import NavBar from "./Components/Navbar";
import Profile from "./Pages/Profile";


import "./index.css";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create_account" component={CreateAccount} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
