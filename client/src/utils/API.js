import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
