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
            type: "input",
            name: "title",
            message: questions[0],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter a title for your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "description",
            message: questions[1],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter a description for your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "install",
            message: questions[2],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to describe how to install your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "usage",
            message: questions[3],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to describe how your project is used."
                } return true;
            }
        },
        {
            type: "input",
            name: "contribution",
            message: questions[4],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter a how to contribute to your project."
                } return true;
            }
        },
        {
            type: "input",
            name: "tests",
            message: questions[5],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter how to test your project."
                } return true;
            }
        },
        {
            type: "checkbox",
            name: "license",
            message: questions[6],
            choices: ["MIT", "None", "GNU GPL v3", "Apache", "ISC"],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to press space on one of the options."
                } return true;
            }
        },
        {
            type: "input",
            name: "username",
            message: questions[7],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter your username for GitHub."
                } return true;
            }
        },
        {
            type: "input",
            name: "email",
            message: questions[8],
            validate: answer => {
                if (answer.length < 1) {
                    return "You need to enter your email."
                } return true;
            }
        }
        
    ])
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
            return writeToFile("README2.md", data)
        })
        .then( () => console.log("Successfully created a README.md!") )
        .catch( error => console.log(error) )
}

// function call to initialize program
init();