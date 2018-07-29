import React from "react";
import "./Profile.css";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();

class Profile extends React.Component {
  state = {
    firstName: "",
    email: "",
    username: "",
    password: ""
  };

  // componentDidMount() {
  //   this.loadUserInformation();
  // }

  // loadUserInformation = () => {
  //   const userName = cookies.get("username");

  //     if (userArray.indexOf(userName) > -1) {
  //       console.log("no user exists")
  //     } else {
  //         console.log("user in system")
  //       API.saveUser({
  //             firstName: this.state.firstName,
  //             email: this.state.email,
  //             username: this.state.username,
  //             password: this.state.password
  //       })
  //       .then(window.location = '/dashboard')
  //       .catch(err => console.log(err)); 
  //     }
  //   });



  //   this.setState({
  //     username: userName,
  //     password: passWord,
  //     firstName: name,
  //     email: eMail
  //   });
  // };

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
