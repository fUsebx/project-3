import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/API/database");
  },
  getUser: function(id) {
    return axios.get("/API/database/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/API/database", userData);
  }
};
