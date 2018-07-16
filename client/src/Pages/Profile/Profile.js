import React from "react";
import "./Profile.css";
import API from "../../utils/API";


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
      <div>
      
      </div>
    );
  }
}

export default Profile;

