<<<<<<< HEAD
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
          </div>
    );
  }
}
=======
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './Pages/LoginForm'; 
//import ProfileForm from './Pages/ProfileForm'
import "./index.css"; 

>>>>>>> ea67865b9e92ef5d37b116a76b49fc72153383e9

const App = () => (
  <Router>
    <div>

      <Switch>
        <Route exact path="/login" component={LoginForm} />
       
      </Switch>
 
      </div>
    </Router>
)

export default App;