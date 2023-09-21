// edit page, history page
// change card background color to match student's choice 
const colorElem = document.querySelector(".color-choice")
let cardElem = document.querySelector(".card")
function checkColor () {
  for (let i=0; i<50; i++) {
    cardElem.style.backgroundColor = colorElem.textContent
  }
}

checkColor()

// history page arrays
// changing color to match the user choice
let arrColorChoice = Array.from(document.querySelectorAll(".color-choice"))
let arrCardElems = Array.from(document.querySelectorAll(".card"))

function checkColorHistory () {
  for (let i=0; i<arrCardElems.length; i++) {
    // HOLY HELL THIS WORKS heck yeah
    arrCardElems[i].style.backgroundColor = arrColorChoice[i].textContent
  }
}
checkColorHistory()

// emoji array

const moodArray = [
  {
    id: "mood1",
    icon: "&#128552;",
  },
  {
    id: "mood2",
    icon: "&#128531;",
  },
  {
    id: "mood3",
    icon: "&#128528;",
  },
  {
    id: "mood4",
    icon: "&#128522;",
  },
  {
    id: "mood5",
    icon: "&#128526;",
  },
];

// need async function to read the parseInt value of the database mood