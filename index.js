const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the steps to install your project?",
    "How is your project used?",
    "What are the guidelines for contributing to your project?",
    "How do you test your project?",
    "What license would you like for your project?",
    "What is your GitHub username?",
    "What is your email?"
];

// function to run inquirer
function promptUser() {
    return inquirer.prompt([
        {
            type: "question",
            name: "title",
            message: questions[0]
        },
        {
            type: "question",
            name: "description",
            message: questions[1]
        },
        {
            type: "question",
            name: "install",
            message: questions[2]
        },
        {
            type: "question",
            name: "usage",
            message: questions[3]
        },
        {
            type: "question",
            name: "contribution",
            message: questions[4]
        },
        {
            type: "question",
            name: "tests",
            message: questions[5]
        },
        {
            type: "checkbox",
            name: "license",
            message: questions[6],
            choices: ["MIT", "None", "GNU GPL v3", "Apache", "ISC"]
        },
        {
            type: "question",
            name: "username",
            message: questions[7]
        },
        {
            type: "question",
            name: "email",
            message: questions[8]
        }
        
    ])
    // .then(answers => console.log(answers))
}

// function to write README file
function writeToFile(fileName, data) {
    const markDown = generateMarkdown.generateMarkdown(data);

    writeFileAsync(fileName, markDown);
}

// function to initialize program
function init() {
        promptUser()
        .then( data => {
            return writeToFile("README.md", data)
        })
        .then( () => console.log("Successfully created a README.md!") )
        .catch( error => console.log(error) )
}

// function call to initialize program
init();