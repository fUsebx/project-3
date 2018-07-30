const router = require('express').Router(); 
const databaseController = require("./../../controllers/databaseController"); 

router.route('/')
    .get(databaseController.findAll)
    .post(databaseController.create)


    router.route("/:id")
    .get(databaseController.findOneUser)
    .put(databaseController.find)
    .delete(databaseController.remove);
    
module.exports = router; 