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
  res.send('Hello world!')
})


// ============= //
// EXPORTS //
module.exports = router