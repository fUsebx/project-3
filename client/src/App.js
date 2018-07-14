import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CreateAccount from "./Pages/CreateAccount";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import LoginForm from "./Pages/LoginForm";
import NavBar from "./Components/Navbar";
import Profile from "./Pages/Profile";
import ProfileForm from "./Pages/ProfileForm";

import "./index.css";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="./login" component={LoginForm} />
        <Route path="/profile-form" component={ProfileForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="create-account" component={CreateAccount} />
        <Route path="profile" component={Profile} />
        <Route path="contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
