const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Template = require("../../models/Template");

//@route POST api/templates
//@desc test route
//@access Public
router.post(
  "/",
  [
    check("componentname", "Component name is require").not().isEmpty(),
    check("color", "Color is require").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      template = new Template({
        componentname: req.body.componentname,
        color: req.body.color,
      });

      res.send("the data has been sent to MongoDB");

      await template.save();
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
