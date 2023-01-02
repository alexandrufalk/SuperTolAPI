const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Summary = require("../../models/Summary");

//@route POST api/summary
//@desc test route
//@access Public
router.post(
  "/",
  [
    check("description", "Description name is require").not().isEmpty(),
    check("sheetname", "Sheetname is require").not().isEmpty(),
    check("author", "Author is require").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      summary = new Summary({
        description: req.body.description,
        sheetname: req.body.sheetname,
        author: req.body.author,
      });

      res.send("the data has been sent to MongoDB");

      await summary.save();
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
