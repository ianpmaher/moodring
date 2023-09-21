const Log = require("./models/logs.js")
const mongoose = require("mongoose")

// requiring this "middleware" in this javascript seed file solved issue
require('dotenv').config()

const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

// connect to the database 
mongoose.connect(mongoURI)

// designing after the fruits Seed.js ==> so node CLI command
Log.create([
  {
    name: "Gore",
    date: "2023-09-05",
    time: "10:10",
    mood: 5,
    description: "Wow I just had an Uncrustable French Toast, so good.",
    tags: [ "so delicious" ],
    color: "#325343"
  },
  {
    name: "Gore",
    date: "2023-09-05",
    time: "14:33",
    mood: 1,
    description: "Bootstrap exists.",
    tags: [ "CSS", "bootstrap" ],
    color: "#106967"
  },
  {
    name: "Gore",
    date: "2023-09-05",
    time: "18:30",
    mood: 4,
    description: "Class started, I am so here for this.",
    tags: [ "SEI", "GA" ],
    color: "#bd93f9"
  },
  {
    name: "Gore",
    date: "2023-09-05",
    time: "19:00",
    mood: 5,
    description: "In 'n Out is actually terrible.",
    tags: [ "food" ],
  },
  {
    name: "Gore",
    date: "2023-09-05",
    time: "19:30",
    mood: 5,
    description: "I'm actually NOT a potato like I always say.",
    tags: [ "not a potato" ],
    color: "#44475a"
  },
  {
    name: "Gore",
    date: "2023-09-06",
    time: "06:30",
    mood: 3,
    description: "Half-asleep, time to develop some amazing designs because I'm gifted like that.",
    tags: [ "Michelin Star" ],
    color: "#314268"
  },
  {
    name: "Gore",
    date: "2023-09-06",
    time: "12:50",
    mood: 5,
    description: "Hash maps are pretty helpful for solving algo problems.",
    tags: [ "programming" ],
    color: "#8f8ec4"
  },

]).then((log) => {
  console.log(log)
  // close the database -- mongoose 
  db.close()
})