const express = require("express");
const router = express.Router();

//@route GET api/database
//@desc test route
//@access Public
router.get("/", (req, res) => res.send("Database route"));

module.exports = router;
