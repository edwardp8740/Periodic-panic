// let { testNumber } = require('./game.js');

// process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// let playGame = (userInput) => {
//   let input = userInput.toString().trim();
//   testNumber(input);
// };

const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    question: "What is 2 + 2?",
    choices: ["1", "2", "3", "4"]
  });
});


app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});