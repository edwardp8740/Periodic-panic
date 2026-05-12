const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors(//{ // testing to see if it shows on github pages 
  //origin: 'https://edwardp9740.github.io/Periodic-panic'}
   ));
app.use(express.static(path.join(__dirname, "..")));

const questions = {
  1: {
    question: "What is the charge of a proton?",
    choices: ["+1", "0", "-1"],
    answer: "+1"
  },
  2: {
    question: "What is Avogadro's number?",
    choices: ["6.02e23", "3.14", "9.8"],
    answer: "6.02e23"
  },
  3: {
    question: "What is the electron configuration of Oxygen?",
    choices: ["1s^2 2s^2 2p^4", "1s^2 2s^2 2p^6", "1s^2 2s^3, 2p^4"],
    answer: "1s^2 2s^2 2p^4"
  },
  4: {
    question: "Which of these is not a strong acid?",
    choices: ["HBr", "H2SO4", "HF", "HCl"],
    answer: "HF"
  },
  5: {
    question: "Which of the following gases has the weakest attractive forces between particles?",
    choices: ["He", "CO2", "HCl", "NO"],
    answer:"He"
  },
  6: {
    question: "An element has the electron configuration 1s^2 2s^2 2p^6 3s^2 3p^4. Which of the following statements about this element is correct?",
    choices: ["It has 6 valence electrons and is in Group 16.", "It has 4 valence electrons and is in Group 14.","It is an alkaline earth metal.", "It is a noble gas with a complete octet." ],
    answer: "It has 6 valence electrons and is in Group 16."
  },
  7: {
    question: "A photoelectron spectrum is 2, 2, 6, 2, and 1. What is the identity of the element?",
    choices: ["Sodium(Na)", "Aluminum(Al)", "Silicon(Si)", "Magnesium(Mg)"],
    answer: "Aluminum(Al)"
  },
  8: {
    question: "Which of the following ranks the atomic radii from smallest to largest?",
    choices: ["Mg < Cl < Na < K", "Cl < Mg < Na < K", "K < Na < Mg < Cl", "Cl < Na < Mg < K" ],
    answer: "Cl < Mg < Na < K"
  },
  9: {
    question: "What is the molecular geometry of XeF2",
    choices: ["Bent", "Linear", "T-shaped", "Trigonal Planar"],
    answer: "Linear"
  },
  10: {
    question: "Which of the following substances has the highest boiling point?",
    choices: ["CH4", "CH3Cl", "CH3OH", "CH3CH3",
    ],
    answer:"CH3OH"
  }
};

app.get("/question/:unit", (req, res) => {
  const unit = req.params.unit;
  res.json(questions[unit]);
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));