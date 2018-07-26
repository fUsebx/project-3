const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const mailerRoutes = require("./mailer");


router.use("/api", apiRoutes);
router.use(mailerRoutes);


router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;