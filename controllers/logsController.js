// express
const express = require ("express")
const router = express.Router() // set up Router method for this controller

// ============= //
// MODELS //
const Log = require("../models/logs.js")

// ============= //
// ROUTES //
// ============= //
// INDEX ROUTE //
router.get('/', (req, res) => {
  res.render("index.ejs")
})
// ============= //
// NEW ROUTE //
router.get("/new", (req, res) => {
  res.render("new.ejs")
})
// ============= //
// HISTORY PAGE ROUTE //
router.get("/history", async (req, res) => {
  const foundLogs = await Log.find({})
  res.render("logHistory.ejs", {
    logs: foundLogs
  })
})
// ============= //
// SHOW ROUTE //
router.get("/:id/", (req, res) => {
  res.render("show.ejs")
})

// POST ROUTE "Create"
router.post("/", async (req, res) => {
  try {
    const newLog = await Log.create(req.body)
    console.log(newLog)
    res.redirect("/logs")
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

// ============= //
// EXPORTS //
module.exports = router