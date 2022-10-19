const inquirer = require('inquirer');
const fs = require('fs');
const questionsImport = require('./questions.js');
const questions = questionsImport.questions;
const generateMarkdown = require('./generateMarkdown.js');

init();

function init() {
inquirer.prompt(questions)
    .then((data) => {
        console.log(JSON.stringify(data));
        console.log(data);
    }).catch((err) => {
        err ? console.error(err) : console.log('Generating README...'); 
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// pass data like output cyan function
// Helper function to output text in the terminal in a cyan color
// const outputCyanText = (text) => console.log(`\x1b[36m${text}\x1b[0m`);