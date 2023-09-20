const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.js");

router.get("/", (req, res) => {
  // res.send("new user screen")
  res.render("newUser.ejs");
});
// login page
router.get("/login", (req, res) => {
  // res.send("new user screen")
  res.render("login.ejs");
});

router.post("/login", async (req, res) => {
  try {
    console.log("before has: ", req.body);
    // salt of 10 = level of difficulty of hashing
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log("after hash: ", req.body);
    // define newUser as user creation through that form
    const newUser = await User.create(req.body);
    req.session.currentUser = newUser;
    res.redirect("/logs");
  } catch (err) {
    console.log("error: ", err);
    res.status(500).send("Please try a different username or password.");
  }
});

module.exports = router;