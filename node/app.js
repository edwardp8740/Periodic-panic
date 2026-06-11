const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
// I serve the index.html from the folder above my node folder.
app.use(express.static(path.join(__dirname, "..")));

// I keep the questions grouped by AP Chem unit so each level only pulls from its own unit.
const questions = {
  1: [
    {
      question: "An element has two naturally occurring isotopes: isotope A has a mass of 10.013 amu and an abundance of 19.9%, and isotope B has a mass of 11.009 amu and an abundance of 80.1%. What is the average atomic mass of this element?",
      choices: ["10.81 amu", "11.009 amu", "10.511 amu", "10.013 amu"],
      answer: "10.81 amu"
    },
    {
      question: "How many moles of aluminum atoms are in a 54.0 g sample of aluminum? M = 27.0 g/mol",
      choices: ["2.00 mol", "27.0 mol", "1.00 mol", "0.500 mol"],
      answer: "2.00 mol"
    },
    {
      question: "A sample contains 3.01 x 10^23 atoms of carbon. How many moles of carbon is this?",
      choices: ["1.00 mol", "2.00 mol", "0.500 mol", "0.250 mol"],
      answer: "0.500 mol"
    }
  ],

  2: [
    {
      question: "What is the molecular geometry of BF3?",
      choices: ["Tetrahedral", "Trigonal pyramidal", "Trigonal planar", "Linear"],
      answer: "Trigonal planar"
    },
    {
      question: "Which molecule has a tetrahedral electron geometry but a trigonal pyramidal molecular geometry?",
      choices: ["BF3", "NH3", "CH4", "CO2"],
      answer: "NH3"
    },
    {
      question: "What is the formal charge on nitrogen in NO3- when nitrogen is double-bonded to one oxygen and single-bonded to two others?",
      choices: ["+1", "+2", "-1", "0"],
      answer: "+1"
    }
  ],

  3: [
    {
      question: "Which type of intermolecular force is primarily responsible for the high boiling point of water, 100 degrees C, compared to H2S, -60 degrees C?",
      choices: ["London dispersion forces", "Hydrogen bonding", "Ion-dipole forces", "Dipole-dipole forces"],
      answer: "Hydrogen bonding"
    },
    {
      question: "Which of the following substances would you expect to have the highest boiling point?",
      choices: ["CH3F, 34 g/mol", "CH3OH, 32 g/mol", "CH3CH3, 30 g/mol", "CH4, 16 g/mol"],
      answer: "CH3OH, 32 g/mol"
    },
    {
      question: "On a heating curve, what happens to the temperature during the flat region between liquid and gas phases?",
      choices: ["Temperature increases rapidly", "Temperature fluctuates as molecules change phase", "Temperature decreases because energy is absorbed", "Temperature remains constant while IMFs are broken"],
      answer: "Temperature remains constant while IMFs are broken"
    }
  ],

  4: [
    {
      question: "For the reaction 2 Al(s) + 3 Cl2(g) -> 2 AlCl3(s), how many moles of AlCl3 are produced from 4.0 mol of Al?",
      choices: ["4.0 mol", "8.0 mol", "6.0 mol", "2.0 mol"],
      answer: "4.0 mol"
    },
    {
      question: "5.0 g of H2 and 40.0 g of O2 react: 2 H2 + O2 -> 2 H2O. Which is the limiting reagent? M H2 = 2.0 g/mol and M O2 = 32.0 g/mol",
      choices: ["H2 is limiting", "Neither; they are in exact stoichiometric proportion", "Cannot be determined without more information", "O2 is limiting"],
      answer: "Neither; they are in exact stoichiometric proportion"
    },
    {
      question: "What is the net ionic equation when NaCl(aq) and AgNO3(aq) are mixed?",
      choices: ["NaCl(aq) + AgNO3(aq) -> AgCl(s) + NaNO3(aq)", "Ag+(aq) + Cl-(aq) -> AgCl(s)", "Na+(aq) + NO3-(aq) -> NaNO3(s)", "No reaction occurs"],
      answer: "Ag+(aq) + Cl-(aq) -> AgCl(s)"
    }
  ],

  5: [
    {
      question: "A plot of ln[A] versus time gives a straight line. What is the order of the reaction with respect to A?",
      choices: ["First order", "Second order", "Third order", "Zero order"],
      answer: "First order"
    },
    {
      question: "A first-order reaction has a rate constant of k = 0.035 s^-1. What is the half-life?",
      choices: ["29 s", "40 s", "10 s", "20 s"],
      answer: "20 s"
    },
    {
      question: "On a reaction coordinate diagram, a catalyst changes which of the following?",
      choices: ["Delta H of the reaction", "The equilibrium constant K", "The energy of the products", "The activation energy Ea"],
      answer: "The activation energy Ea"
    }
  ],

  6: [
    {
      question: "In a coffee-cup calorimeter, 50.0 mL of 1.00 M HCl is mixed with 50.0 mL of 1.00 M NaOH. The temperature rises from 22.0 degrees C to 28.9 degrees C. What is q_rxn? Assume c = 4.18 J/(g degrees C), density = 1.00 g/mL.",
      choices: ["-28.8 kJ", "-2.88 kJ", "+2.88 kJ", "-1.44 kJ"],
      answer: "-2.88 kJ"
    },
    {
      question: "Given these reactions: C(s) + O2(g) -> CO2(g), Delta H = -393.5 kJ; H2(g) + 1/2 O2(g) -> H2O(l), Delta H = -285.8 kJ; CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l), Delta H = -890.4 kJ. What is Delta Hf for CH4(g)?",
      choices: ["-74.7 kJ", "+74.7 kJ", "-890.4 kJ", "-679.3 kJ"],
      answer: "-74.7 kJ"
    },
    {
      question: "Using standard enthalpies of formation, calculate Delta H rxn for the combustion of propane: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l). Delta Hf CO2 = -393.5 kJ/mol, H2O(l) = -285.8 kJ/mol, C3H8 = -103.8 kJ/mol.",
      choices: ["-1180 kJ", "-2220 kJ", "-2324 kJ", "+2220 kJ"],
      answer: "-2220 kJ"
    }
  ],

  7: [
    {
      question: "What is the equilibrium expression Kc for the reaction 2 SO2(g) + O2(g) <=> 2 SO3(g)?",
      choices: ["Kc = [SO2]^2[O2] / [SO3]^2", "Kc = 2[SO3] / (2[SO2] + [O2])", "Kc = [SO3] / ([SO2][O2])", "Kc = [SO3]^2 / ([SO2]^2[O2])"],
      answer: "Kc = [SO3]^2 / ([SO2]^2[O2])"
    },
    {
      question: "Kc = 0.040 for N2O4(g) <=> 2 NO2(g). If [N2O4] = 0.50 M and [NO2] = 0.10 M, which direction will the reaction shift?",
      choices: ["Right, because Q < K", "Left, because Q > K", "Cannot be determined without temperature", "No shift; the system is at equilibrium"],
      answer: "Right, because Q < K"
    },
    {
      question: "For the exothermic reaction N2(g) + 3 H2(g) <=> 2 NH3(g), what happens to the equilibrium yield of NH3 if the temperature is increased?",
      choices: ["Increases because higher T speeds up the reaction", "Stays the same because K is a constant", "Increases because more collisions occur", "Decreases because the equilibrium shifts left"],
      answer: "Decreases because the equilibrium shifts left"
    }
  ],

  8: [
    {
      question: "What is the pH of a 0.0010 M HCl solution?",
      choices: ["7.00", "3.00", "1.00", "11.0"],
      answer: "3.00"
    },
    {
      question: "What is the pH of a 0.020 M Ba(OH)2 solution?",
      choices: ["12.60", "12.30", "1.40", "13.30"],
      answer: "12.60"
    },
    {
      question: "A 0.10 M solution of acetic acid, Ka = 1.8 x 10^-5, has what pH?",
      choices: ["7.00", "1.00", "2.87", "4.74"],
      answer: "2.87"
    }
  ],

  9: [
    {
      question: "A reaction has Delta H = -100 kJ and Delta S = +50 J/K. At what temperatures is this reaction spontaneous?",
      choices: ["Never spontaneous", "Only at low temperatures", "Only at high temperatures", "At all temperatures"],
      answer: "At all temperatures"
    },
    {
      question: "Calculate Delta G for a reaction with Delta H = -50.0 kJ and Delta S = -100 J/K at 300 K.",
      choices: ["-20.0 kJ", "+20.0 kJ", "-29,950 kJ", "-80.0 kJ"],
      answer: "-20.0 kJ"
    },
    {
      question: "If Delta G = -30.0 kJ at 298 K, what is K? R = 8.314 J/(mol K)",
      choices: ["1.8 x 10^5", "30,000", "5.6 x 10^-6", "12"],
      answer: "1.8 x 10^5"
    }
  ]
};

app.get("/question/:unit", (req, res) => {
  const unit = req.params.unit;
  const unitQuestions = questions[unit];

  // I send a 404 if the game asks for a unit that does not exist.
  if (!unitQuestions) {
    res.status(404).json({ error: "No questions found for unit " + unit });
    return;
  }

  // I only choose randomly from the unit that matches the level.
  const randomIndex = Math.floor(Math.random() * unitQuestions.length);
  res.json(unitQuestions[randomIndex]);
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});