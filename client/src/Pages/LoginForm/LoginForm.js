import React from "react";
import "./LoginForm.css";

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

  render(){
    return (
      <div>
      <form>
          <input 
          type="text" 
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          placeholder="Username"
          />
          <input 
          type="text" 
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          placeholder="password" 
          />
       
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    </div>
    )
  }
}

export default LoginForm;
