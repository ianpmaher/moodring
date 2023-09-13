const mongoose = require("mongoose")
// Schema constructor definitions
const logSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  mood: { type: Number, required: true, min: 1, max: 5, enum: [1,2,3,4,5]}, // maybe have enum? https://mongoosejs.com/docs/schematypes.html#numbers
  emoji: { type: String },
  tags: { type: [String] } // this should have tags as an array of strings
})

// create the Log model
const Log = mongoose.model("Log", logSchema)

// export the module!
module.exports = Log