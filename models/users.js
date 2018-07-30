const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  
  firstName: {
    type: String, 
    trim: true, 
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid e-mail address"]
  },
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 5;
      },
      "Password should be longer than 5 characters"
    ]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
