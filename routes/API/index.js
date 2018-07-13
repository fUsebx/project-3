const router = require("express").Router();
const databaseRoutes = require("./database");

router.use("/database", databaseRoutes);

module.exports = router;