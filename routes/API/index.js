const router = require("express").Router();
const databaseRoutes = require("./database");

router.use("/API", databaseRoutes);

module.exports = router;