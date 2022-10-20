const inquirer = require('inquirer');
const fs = require('fs');
const questionsImport = require('./questions.js');
const questions = questionsImport.questions;
const generateMarkdown = require('./generateMarkdown.js');

init();

function init() {
inquirer.prompt(questions)
    .then((response) => {
        const data = response;
        const license = data.license;
        console.log (license);
        generateMarkdown.renderLicense(license);
        generateMarkdown.generateMarkdown(data);
    }).catch((err) => {
        err ? console.error(err) : console.log('Generating README...'); 
    })
}