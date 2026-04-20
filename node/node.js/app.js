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
// const express = require("express");
// const app = express();

// app.get("/question/:unit", (req, res) => {
//    const unit = req.params.unit;

//    const questions = {
//        1: {
//            question: "What is the charge of a proton?",
//            choices: ["+1", "0", "-1"],
//            answer: "+1"
//        },
//        2: {
//            question: "What is Avogadro's number?",
//            choices: ["6.02e23", "3.14", "9.8"],
//            answer: "6.02e23"
//        }
//    };

//    res.json(questions[unit]);
// });

// app.listen(3000, () => console.log("API running"));















// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// const PORT = 4000;

// // questions by unit
// const questions = {
//   1: {
//     question: "What is the charge of a proton?",
//     choices: ["+1", "0", "-1"],
//     answer: "+1"
//   },
//   2: {
//     question: "What is Avogadro's number?",
//     choices: ["6.02e23", "3.14", "9.8"],
//     answer: "6.02e23"
//   },
//   3: {
//     question: "What type of bond shares electrons?",
//     choices: ["Ionic", "Covalent", "Metallic"],
//     answer: "Covalent"
//   }
// };

// // route
// app.get("/question/:unit", (req, res) => {
//   const unit = req.params.unit;

//   if (!questions[unit]) {
//     return res.status(404).json({ error: "No question for this unit" });
//   }

//   res.json(questions[unit]);
// });

// app.listen(PORT, () => {
//   console.log("Server running on http://localhost:" + PORT);
// });












// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const questions = {
    1: {
        question: "What is the charge of a proton?",
        choices: ["+1", "-1", "0"],
        answer: "+1"
    },
    2: {
        question: "What is H2O?",
        choices: ["Hydrogen", "Water", "Oxygen"],
        answer: "Water"
    },
    3: {
        question: "Atomic number represents?",
        choices: ["Neutrons", "Protons", "Electrons"],
        answer: "Protons"
    }
};

app.get("/question/:unit", (req, res) => {
    const unit = req.params.unit;
    res.json(questions[unit] || {
        question: "No question found",
        choices: ["OK"],
        answer: "OK"
    });
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});