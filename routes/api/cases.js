const express = require("express");
const router = express.Router();

//@route GET api/cases
//@desc tEST ROUTE
//@access Public
router.get("/", (req, res) => res.send("Cases route"));

module.exports = router;
