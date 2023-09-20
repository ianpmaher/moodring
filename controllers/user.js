const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require("../models/user.js")

router.get("/", (req, res) => {
  // res.send("new user screen")
  res.render("newUser.ejs")
})