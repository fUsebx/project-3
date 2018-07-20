import React from "react";
import "./Profile.css";
<<<<<<< HEAD
// import API from "../../utils/API";
=======
//import API from "../../utils/API";

>>>>>>> 9d96c364b95dd4e5074268afe128f323d8255514

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm col-centered ">
            <div className="well profile-well">
              <div className="profile-header">
                <h1>Welcome, John Doe</h1>
              </div>
              <div className="profile-centered">
                <i className="fas fa-user fa-10x profile-image" />
              </div>
              <div className="well profile-info">
              <br />
              <p>First Name: </p>
              <p>Last Name: </p>
              <p>Username: </p>
              <p>Email: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
