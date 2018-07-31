import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import clickHandle from './assets/clickHandle';
//import { hideDisplay } from "./assets/hideDisplay";
//import onLoadHandler from './assets/onLoadHandler'
//import {hideDisplay} from './assets/hideDisplay'; 
// import Cookies from 'universal-cookie';
// let cookie = new Cookies().get('username')

// const DisplayChoice = (props) => {
//   if (cookie === undefined) {
    
//     return "btn-nav"
//   } else {
    
//     return "hide-btn"
//   }
// }


export default () => (

  <nav className="navbar navbar-expand-lg navbar-light"> 

  
  <Link to="/home"><img className="img img-logo" src={require("./assets/logo.png")} alt="logo"/></Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
      <Link  className="btn-nav" to="/about">About</Link>
      </li>
      
      <li className="nav-item">
      <Link className="btn-nav" to="/login">Sign In</Link>
      </li>

      <li className="nav-item">
      <Link className="btn-nav" to="/create_account">Create Account</Link>
      </li>

      <li className="nav-item">
      <Link className="btn-nav" to="/profile">Profile</Link>
      </li>      
      
      <li className="nav-item">
      <Link className="btn-nav" to="/dashboard">Dashboard</Link>
      </li>      
      
      <li className="nav-item">
      <Link onClick={clickHandle} className="btn-nav" to="/home">Sign Out</Link>
      </li>

    </ul>
  </div>

</nav>
);


// export default () => (
//   <nav className="navbar navbar-static-top">
//     <div className="container nav-container">
//       <a className="logo-btn" active>
//         <Link to="/home">
//         <img
//           className="img img-logo"
//           src={require("./assets/logo.png")}
//           alt="logo"
//         />
//         </Link>
//       </a>
//       <button className="nav-link" active> 
//         <Link className="nav-btn" to="/">Sign Out</Link>
//       </button>
//       <button className="nav-link" active> 
//         <Link className="btn-nav" to="/dashboard">Dashboard</Link>
//       </button>
//       <button className="nav-link" active> 
//         <Link className="btn-nav" to="/profile">Profile</Link>
//       </button>
//       <button className="nav-link" active> 
//         <Link className="btn-nav" to="/create_account">Create Account</Link>
//       </button>
//       <button className="nav-link" active> 
//         <Link className="btn-nav" to="/login">Sign In</Link>
//       </button>
//       <button className="nav-link" active> 
//         <Link className="btn-nav" to="/about">About</Link>
//       </button>
//     </div>
//   </nav>
// );
