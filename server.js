// IMPORTS
const express = require("express");
const app = express();
const methodOverride = require("method-override");
// below needed for user auth and sessions
const session = require("express-session");
const bcrypt = require("bcrypt");

// ===================== //
// ENVIRONMENTAL VARIABLES //
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// ===================== //
// MIDDLEWARE // moving up here to see if this will work better
app.use(express.urlencoded({ extended: true }));
// method override npm package in order to DELETE and PUT
app.use(methodOverride("_method"));
app.use(express.json());
// session app.use expressions
app.use(
  session({
    secret: process.env.SECRET, // a random string, do not copy this value
    resave: false, // default more info here => https://www.npmjs.com/package/express-session#resave
    saveUnitialized: false,
  })
);

// ===================== //
// STATIC FILES
app.use(express.static("public"));

// setup database
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

// connect to mongo
mongoose.connect(mongoURI);

const db = mongoose.connection;
// optional create status messages to check mongo connection
db.on("error", (err) => {
  console.log("ERROR: ", err);
});
db.on("connected", () => {
  console.log("mongo connected");
});
db.on("disconnected", () => {
  console.log("mongo disconnected");
});

// ===================== //
// CONTROLLERS //
// import controller logsController.js
const logsController = require("./controllers/logsController.js");
// import controller userController.js
const userController = require("./controllers/user.js");
// import controller sessions controller = sessions.js ??
const sessionsController = require("./controllers/sessions.js")

// === Authentication === //
// this is custom middleware
const isAuthenticated = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/sessions/new");
  }
};

// use controller for user
app.use("/user", userController);
// sessions controller
app.use("/sessions", sessionsController)
app.use(isAuthenticated);
// use this controller with app.use so whole server accesses
app.use("/logs", logsController);

// =========== //
// ROUTES //
// ============= //
// INDEX ROUTE //
app.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  });
});

// testing the user auth stuff
app.get("/any", (req, res) => {
  req.session.anyProperty = "something";
  res.redirect("/logs");
});

app.get("/retrieve", (req, res) => {
  if (req.session.anyProperty === "something") {
    console.log("It is a match!");
  } else {
    console.log("It is NOT a match.");
  }
  res.redirect("/logs");
});

app.get("/updateSession", (req, res) => {
  req.session.anyProperty = "not something";
  res.redirect("/logs");
});

// set up app to run!
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
