const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'gitUrl',
        message: 'What is your github url?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a brief description of the project',
    },
    {
        type: 'input',
        name: 'demo',
        message: 'Enter your demo image file path',
    },
    {
        type: 'input',
        name: 'cloneUrl',
        message: 'Please enter your clone repo URL',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation steps?',
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command is needed for dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your application',
    },
    {
        type: 'input',
        name: ' contribution',
        message: 'Provide contribution instructions',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide testing steps',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses are required for this project?',
        choices: ["Apache", "GNU", "ISC", "MIT",]
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your emai address?',
    },





]).then(response => {



    const answers = ``















    fs.writeFile('README.md', answers, (err) => {
        err ? console.log("oops") : console.log("Yay!")
    })

});

