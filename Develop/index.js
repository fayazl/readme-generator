// TODO: Include packages needed for this application
const fs = require('fs')
const util = require('util')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
    
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide the installation instructions"
        },    
        {
            type: "input",
            name: "usage",
            message: "Please provide the usage information of your project"
        },
        {
            type: "input",
            name: "contributing",
            message: "Please provide the contribution guidelines"
        },
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions"
        },
        {
            type: "list",
            name: "license",
            message: "Choose the right license for this project:",
            choices: [
                "Apache",
                "Academic",
                "Intel",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]);
};

questions()

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
