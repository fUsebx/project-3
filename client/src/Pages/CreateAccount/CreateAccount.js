import React from "react";
import "./CreateAccount.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../Components/Form";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
      console.log("must fill in message");
    } else if (this.state.password.length < 4) {
      console.log("must be greater than 4");
    } else {
      const enteredUsername = this.state.username;
      API.getUsers().then(res => {
        const userArray = res.data.map(user => {
          return user.username;
        });
        if (userArray.indexOf(enteredUsername) > -1) {
          window.location = "/error-username";
        } else {
          cookies.set("username", this.state.username, { path: '/' });
          API.saveUser({
            firstName: this.state.firstName,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
          })
            .then(window.location = '/profile')
            .catch(err => console.log(err))

          this.setState({
            firstName: "",
            email: "",
            username: "",
            password: ""
          })

        }
      });
    }
  };
  render() {
    return (
      <div className="container-fluid create-form">
        <div className="row">
          <div className="col-md col-centered">
            <div className="create-acct">
              <h4 className="create-h4">Create a new fUsebx account</h4>
              <br />
              <form className="form-group">
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  placeholder="First Name"
                  className="form-control"
                />
                <br />
                <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email"
                  className="form-control"
                />
                <br />
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Username"
                  className="form-control"
                />
                <br />
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  placeholder="Password"
                  className="form-control"
                />
                <br />
                <br />
                <FormBtn
                  className="btn-create-acct"
                  onClick={this.handleFormSubmit}
                >
                  {" "}
                  Create Account{" "}
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
