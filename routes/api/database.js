const router = require('express').Router(); 
const databaseController = require("./../../controllers/databaseController"); 

router.route('/')
    .get(databaseController.findAll)
    .post(databaseController.create)

    router.route("/:id")
    .get(databaseController.findById)
    .put(databaseController.update)
    .delete(databaseController.remove);
    
module.exports = router; 