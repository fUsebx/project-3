const router = require("express").Router();
const databaseRoutes = require("./database");

router.use("/", databaseRoutes);

module.exports = router;