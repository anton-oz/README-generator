// TODO: Include packages needed for this application

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  "Application title:",
  "App Description:",
  "Installation instructions:",
  "How to use the app:",
  "Select a license for your app:",
  "How to contribute to this app:",
  "How to test this app:",
  "Github username:",
  "Email:",
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`./README/README.md`, data, (err) => {
    err ? console.error(err) : console.log("Successfully generated README.md");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: `${questions[0]}`,
        name: "title",
      },
      {
        type: "input",
        message: `${questions[1]}`,
        name: "description",
      },
      {
        type: "input",
        message: `${questions[2]}`,
        name: "install",
      },
      {
        type: "input",
        message: `${questions[3]}`,
        name: "usage",
      },
      {
        type: "list",
        message: `${questions[4]}`,
        choices: ["MIT", "Apache", "GPL", "none"],
        name: "license",
      },
      {
        type: "input",
        message: `${questions[5]}`,
        name: "contribute",
      },
      {
        type: "input",
        message: `${questions[6]}`,
        name: "testing",
      },
      {
        type: "input",
        message: `${questions[7]}`,
        name: "github",
      },
      {
        type: "input",
        message: `${questions[8]}`,
        name: "email",
      },
    ])
    .then((answers) => {
      writeToFile(generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
