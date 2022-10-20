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
        const licenseInfo = {
            license: data.license,
            badge: '',
            url: ''
        };
        console.log (licenseInfo.license);
        generateMarkdown.renderLicense(licenseInfo);
        generateMarkdown.generateMarkdown(data, licenseInfo);
    }).catch((err) => {
        err ? console.error(err) : console.log('Generating README...'); 
    })
}