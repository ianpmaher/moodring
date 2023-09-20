const bcrypt = require("bcrypt")
const router = require("express").Router()
const User = require("../models/user")

router.get("/", (req, res) => {
  res.send("cool beans")
})

router.get("/new", (req, res) => {
  res.render("login.ejs"), {
    currentUser: req.session.currentUser
  }
})

router.post("/new", async (req, res) => {
  // if username is found and password matches => successful login
  // if username is not found => unsuccessful login
  // if username found but password doesn't match => unsuccessful login // don't give too much detail

  // looking for the username
  try {
    const foundUser = await User.findOne({ username: req.body.username })
    if (!foundUser) {
      // not finding username
      res.status(500).send("Please try a different username or password.");
    } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      // username is found
      // passwords match!
      // add this user to our SESSION
      req.session.currentUser = foundUser
      // now redirect back to homepage
      res.redirect("/")
    } else {
      // passwords do not match
      res.status(500).send("Please try a different username or password.");
    }
  } catch(err) {
    console.log("error with username or password", err)
    res.status(500).send("problem with database");
  }
})

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/logs")
  }) 
})

module.exports = router