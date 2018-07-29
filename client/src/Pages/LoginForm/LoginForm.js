import React from "react";
import "./LoginForm.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../Components/Form";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    users: []
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
    if (!this.state.username && !this.state.password) {
      console.log("enter something first");
    } else {
      cookies.set("username", this.state.username);
      cookies.set("password", this.state.password);

      const enteredUsername = this.state.username;
      const enteredPassword = this.state.password;

      API.getUsers()
        .then(res => {
          const raw = res.data;
          
          raw.map(user => {
            const databaseUsers = user.username;
            const databasePasswords = user.password;

            if (
              enteredUsername === databaseUsers && enteredPassword === databasePasswords
            ) {
             
              cookies.set("firstName", user.firstName, { path: '/profile' })
              cookies.set("email", user.email, { path: '/profile' })
              cookies.set("username", user.username, { path: '/profile' })
              window.location = "/dashboard";
            } else {
              console.log("fail")
            }
            return user;
          });
        })
        .catch(err => console.log(err));
    }

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="container-fluid login-form">
        <div className="row">
          <div className="col-md col-centered">
            <div className="login-box">
              <form className="form-group">
                <h4 className="login-h4">
                  Please log into your fUsebx account
                </h4>
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
                <FormBtn onClick={this.handleFormSubmit}> Sign In </FormBtn>
                <br />
                <br />
                <p id="no-acct">Don't have an account?</p>
                <FormBtn className="btn-create-acct">
                  <Link className="create-link" to="/create_account">
                    Create Account
                  </Link>
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
