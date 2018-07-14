import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./Components/Footer";
import LoginForm from "./Pages/LoginForm";
import NavBar from "./Components/Navbar";
import ProfileForm from "./Pages/ProfileForm";

import "./index.css";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/profile" component={ProfileForm} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
