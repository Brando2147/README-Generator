const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
    {
        type: ' ',
        name: ' ',
        message: ' ',
    },
]).then(response => {



    const answers = ``















    fs.writeFile('README.md', answers, (err) => {
        err ? console.log("oops") : console.log("Yay!")
    })

});

