import React from "react";
import "./Profile.css";
import Cookies from "universal-cookie";
import API from '../../utils/API'


const cookies = new Cookies();

class Profile extends React.Component {
  state = {
    firstName: "",
    email: "",
    username: "",
    password: ""
  };

  componentDidMount() {
    this.loadUserInformation();
  }

  loadUserInformation = () => {
    let userName = cookies.get("username");
    
    
    API.getUser(userName)
      .then().then(res => {
       const userzName = res.data.username
       const first = res.data.firstName; 
       const emailAddress = res.data.email;
       this.setState({
         username: userzName,
         firstName: first, 
         email: emailAddress
       })
      })
  }

  render() {
    return (
      <div className="container-fluid profile-page">
        <div className="row">
          <div className="col-md col-centered ">
            <div className="profile-div">
              <div className="profile-header">
                <h1>Welcome, {this.state.firstName}</h1>
              </div>
              <div className="center-image">
                <i className="fas fa-user fa-10x profile-image" />
              </div>
              <div className="well profile-info">
                <br />
                <div className="profile-input">
                  <p>First Name: {this.state.firstName} </p>
                  <p>Username: {this.state.username}</p>
                  <p>Email: {this.state.email} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
