import React from "react";
import "./CreateAccount.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../Components/Form";

class CreateAccount extends React.Component {
  state = {
    firstName: "",
    email: "",
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
    if (!this.state.username || !this.state.password || !this.state.firstName) {
      alert("YOU MUST FILL OUT A USERNAME AND PASSWORD");
    } else if (this.state.password.length < 6) {
      alert("PASSWORD MUST BE LONGER");
    } else {
      API.saveUser({
        firstName: this.state.firstName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
        .then("Sucess")
        .catch(err => console.log(err));
    }

    this.setState({
      firstName: "",
      email: "",
      username: "",
      password: ""
    });
  };


  render() {
    return (
      <div className="create-acct">
        <form className="form-group">
          <Input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            placeholder="First Name"
            className="form-control"
          />
          <Input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email"
            className="form-control"
          />
          <Input
            type="text" 
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
            className="form-control"
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Password"
            className="form-control"
          />
          <br />
          <FormBtn onClick={this.handleFormSubmit}> Create Account </FormBtn>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
