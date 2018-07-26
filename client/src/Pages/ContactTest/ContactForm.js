import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            nameField: ""
        }
        // Let's chat about binding
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({ nameField: e.target.value });
        console.log(e.target.value);
    }
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3000/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        // This is called deconstruction. This is ES6 JS, read about it.
        const { nameField } = this.state;
        return(
            <div className="col-sm-4 offset-sm-4">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" value={ nameField } onChange={ this.handleInput }/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 