import React from "react";
import "./Profile.css";
//import API from "../../utils/API";

class Profile extends React.Component {
  state = {
    firstName: "",
    email: "",
    username: "",
    password: ""
  };

  // loadUser = () => {
  //   API.getUsers(res)
  //     .then(
  //       console.log(res)
  //     )
  //     .catch(err => console.log(err));
  // };
  render() {
    return (
      <div className="container-fluid profile-page">
        <div className="row">
          <div className="col-md col-centered ">
            <div className="profile-div">
              <div className="profile-header">
                <h1>Welcome, John Doe</h1>
              </div>
              <div className="center-image">
                <i className="fas fa-user fa-10x profile-image" />
              </div>
              <div className="well profile-info">
                <br />
                <div className="profile-input">
                  <p>First Name: </p>
                  <p>Last Name: </p>
                  <p>Username: </p>
                  <p>Email: </p>
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
