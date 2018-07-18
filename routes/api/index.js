const router = require("express").Router();
const databaseRoutes = require("./database");

router.use("/users", databaseRoutes);

module.exports = router;