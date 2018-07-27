import React, { Component } from "react";
import axios from "axios";
import { FormBtn } from "../../Components/Form";
import "./Contact.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: ""
    };
    // Let's chat about binding
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ nameField: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    // This is called deconstruction. This is ES6 JS, read about it.
    const { nameField } = this.state;
    return (
        <div className="container-fluid contact-form">
        <div className="row">
      <div className="col-md col-centered">
        <form
        className="contact-form-form"
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
        <h4 className="contact-h4 text-center">Send a message to the fUseBx team</h4>
            <br />
          <div className="form-group">
            <label className="contact-form-label" for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={nameField}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label className="contact-form-label" for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label className="contact-form-label" for="message">Message</label>
            <textarea className="form-control" rows="5" id="message" />
          </div>
          <FormBtn type="submit">Submit</FormBtn>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default ContactForm;
