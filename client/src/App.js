import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginForm from './Pages/LoginForm'; 
//import ProfileForm from './Pages/ProfileForm'
import "./index.css"; 


const App = () => (
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={LoginForm} />
       
      </Switch>
 
      </div>
    </Router>
)

export default App;