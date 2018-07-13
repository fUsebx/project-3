const db = require('../models');

module.exports = {
    findById: function (req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        const user = {
            username: req.body.username,
            password: req.body.password,
            userCreated: req.body.userCreated
        };
        db.Users
            .create(user)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));

    }
}; 

