const router = require('express').Router(); 
const databaseController = require("./../../controllers/databaseController"); 

router.route('/')
    .get(databaseController.findById)
    .post(databaseController.create)
    
module.exports = router; 