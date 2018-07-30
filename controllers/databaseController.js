const db = require("../models");

module.exports = {
  find: function(req, res) {
    db.Users.find({_id: req.query}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Users.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOneUser: function(req, res) {
    db.Users.findOne({ username: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const user = {
      firstName: req.body.firstName, 
      email: req.body.email, 
      username: req.body.username,
      password: req.body.password,
      userCreated: req.body.userCreated
    };
    db.Users.create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
