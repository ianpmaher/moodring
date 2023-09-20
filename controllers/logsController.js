// express
const express = require("express");
const router = express.Router(); // set up Router method for this controller

// ============= //
// MODELS //
const Log = require("../models/logs.js");

// ============= //
// ROUTES //
// ============= //
// INDEX ROUTE //
router.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
  });
});
// ============= //
// NEW ROUTE //
router.get("/new", (req, res) => {
  res.render("new.ejs", {
    currentUser: req.session.currentUser
  });
});
// ============= //
// HISTORY PAGE ROUTE //
router.get("/history", async (req, res) => {
  const foundLogs = await Log.find({});
  res.render("logHistory.ejs", {
    logs: foundLogs,
    currentUser: req.session.currentUser
  });
});
// ============= //
// SHOW ROUTE //
router.get("/:id/", async (req, res) => {
  const foundLog = await Log.findById(req.params.id);
  res.render("show.ejs", {
    log: foundLog,
    currentUser: req.session.currentUser
  });
});
// ============ //
// EDIT ROUTE //
router.get("/:id/edit", async (req, res) => {
  // console.log(`${Product.findById(req.params.id)}`);
  const logToEdit = await Log.findById(req.params.id);
  res.render("edit.ejs", {
    log: logToEdit,
    currentUser: req.session.currentUser
  });
});
// POST ROUTE "Create"
router.post("/", async (req, res) => {
  try {
    const newLog = await Log.create(req.body);
    console.log(newLog);
    res.redirect("/logs/history/");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
// ============ //
// PUT ROUTE -- PUT /logs/:id -- updates the info on the server
router.put("/:id", async (req, res) => {
  try {
    // in edit.ejs, have the "value" of img url is the URL that was there before, so same img
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // overwrite the old product and redirect to main page
    res.redirect("/logs/" + updatedLog.id);
  } catch (err) {
    console.log("error in edit", err);
    res.status(500).send(err);
  }
});
// ============ //
// DELETE ROUTE -- DELETE /products/:id --
router.delete("/:id", async (req, res) => {
  try {
    const logToDelete = await Log.findByIdAndDelete(req.params.id);
    console.log("Deleted log: ", logToDelete);
    res.redirect("/logs/");
  } catch {
    console.log("error on delete: ", err);
    res.status(500).send(err);
  }
});

// ============= //
// EXPORTS //
module.exports = router;
