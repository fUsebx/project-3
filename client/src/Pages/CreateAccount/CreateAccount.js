import React from "react";
import "./CreateAccount.css";
import API from "../../utils/API";
import { Input, FormBtn } from "../../Components/Form";

class CreateAccount extends React.Component {
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
      alert("YOU MUST FILL OUT A USERNAME AND PASSWORD"); 
    } else if (this.state.password.length < 6) {
      alert("PASSWORD MUST BE LONGER"); 
    } else {
      API.saveUser({
        username: this.state.username, 
        password: this.state.password
      })
      .then(res => this.loadUsers())
      .catch(err => console.log(err)); 
    }

    this.setState({
      username: "",
      password: ""
    });

  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ username: "", password: ""})
      )
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="create-acct">
        <form className="form-group"> 
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
          <FormBtn onClick={this.handleFormSubmit}> Create Account </FormBtn>
             
        </form>
        </div>

    );
  }
}

export default CreateAccount;
