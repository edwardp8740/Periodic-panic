// let { testNumber } = require('./game.js');

// process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// let playGame = (userInput) => {
//   let input = userInput.toString().trim();
//   testNumber(input);
// };

// const express = require("express");
// const app = express();

// const PORT = 4000;

// app.get("/", (req, res) => {
//   res.json({
//     question: "What is 2 + 2?",
//     choices: ["1", "2", "3", "4"]
//   });
// });


// app.listen(PORT, () => {
//   console.log("Server running on http://localhost:" + PORT);
// });
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
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
  }
};

app.get("/question/:unit", (req, res) => {
  const unit = req.params.unit;
  res.json(questions[unit]);
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));