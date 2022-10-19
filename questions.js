const questions = [
    {
        type: 'input',
        message: 'Please enter your Github Username.',
        name: 'ghUserName',

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a short description of your project.',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Please select a license type for your application',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependCmd',
        default: 'npm install'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testsCmd',
        default: 'npm run test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    { 
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: "contributions"
    }
];

module.exports = {
    questions
};