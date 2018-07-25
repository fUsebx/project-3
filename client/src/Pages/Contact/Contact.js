import React from "react";
import "./Contact.css";
import { FormBtn } from "../../Components/Form";

const Contact = () => (
  <div className="container-fluid contact-form">
    <div className="row">
      <div className="col-md col-centered">
        <div>
          <form className="contact-form-form">
            <div className="form-group">
            <h4 className="contact-h4 text-center">Send a message to the fUseBx team</h4>
            <br />
              <label className="contact-form-input" for="inputName"> Name </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Jane Doe"
              />
            </div>
            <div className="form-group">
              <label className="contact-form-input" for="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="jane@email.com"
              />
            </div>
            <div className="form-group">
              <label className="contact-form-input" for="inputSubject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="inputSubject"
                placeholder="example"
              />
            </div>
            <div className="form-group">
              <label className="contact-form-input" for="inputMessage">Message</label>
              <textarea className="form-control" id="inputMessage" placeholder="enter your message..." rows="4" />
            </div>

            <FormBtn type="submit">
              Submit
            </FormBtn>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
