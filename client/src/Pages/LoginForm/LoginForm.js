import React from "react";
import "./LoginForm.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../Components/Form";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Must fill out a password/username?");
    } else if (this.state.password.length < 6) {
      alert("Please choose a longer password");
    } else {
      alert("Username/Password created!");
    }

    this.setState({
      username: "",
      password: ""
    });
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => this.setState({ username: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
          />
          <Input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="password"
          />
          <FormBtn onClick={this.handleFormSubmit}> SUBMIT USER </FormBtn>
        </form>
      </div>
    );
  }
}

export default LoginForm;
