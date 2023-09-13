// IMPORTS
const express = require('express')
const app = express()
const methodOverride = require("method-override")

// ===================== //
// ENVIRONMENTAL VARIABLES //
require('dotenv').config()

const PORT = process.env.PORT || 3000

// ===================== //
// MIDDLEWARE // moving up here to see if this will work better
app.use(express.urlencoded({ extended: true }))
// method override npm package in order to DELETE and PUT
app.use(methodOverride("_method"))
// ===================== //
// STATIC FILES 
app.use(express.static("public"))

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

// ===================== //
// CONTROLLERS //
// import controller logsController.js
const logsController = require("./controllers/logsController.js")
// use this controller with app.use so whole server accesses
app.use("/logs", logsController)


// =========== //
// ROUTES //


// set up app to run!
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})