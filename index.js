// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'Application title:',
    'App Description:',
    'Installation instructions:',
    'How to use the app:',
    'Select a license for your app:',
    'How to contribute to this app:',
    'How to test this app:',
    'Github username:',
    'Email:'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`./README/README.md`, data, err => {
        err ? console.error(err) : console.log('Successfully generated README.md')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'title'
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'description'
        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'install'
        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'usage'
        },
        {
            type: 'list',
            message: `${questions[4]}`,
            choices: ['MIT', 'Apache', 'GPL', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'contribute'
        },
        {
            type: 'input',
            message: `${questions[6]}`,
            name: 'testing'
        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'github'
        },
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'email'
        }
    ])
    .then(answers => {
        writeToFile(generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
