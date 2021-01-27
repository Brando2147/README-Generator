const inquirer = require('inquirer');
const fs = require('fs');



const userPrompts = [
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
        name: 'projectTitle',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'projectURL',
        message: 'What is the URL of your Project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please add a brief description of the project',
    },
    {
        type: 'input',
        name: 'demoImg',
        message: 'Enter your demo image file path',
    },
    {
        type: 'input',
        name: 'imgAlt',
        message: 'Description of your image',
    },
    {
        type: 'input',
        name: 'demoGif',
        message: 'Enter your demo GIF file path',
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
        name: 'usageDetails',
        message: 'Describe how to use your application',
    },
    {
        type: 'input',
        name: 'contribution',
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
        name: 'yourEmail',
        message: 'What is your email address?',
    }


]


function generateMd(response) {
    const readMe =

        `
# Title

MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licensesMIT)',
Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.orglicenses/Apache-2.0)',
ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC',
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.orglicenses/MPL-2.0)


${response.projectTitle}


## Description
${response.projectDescription}



## Table of Contents
[Description](#Description)
[About](#About)
[Built-With](#Built-with)
[Demo](#Demo)
[Installation](#Installation)
[Tests](#Tests)
[Questions](#Questions)
[Usage](#Usage)
[Contributing](#Contributing)
[License](#License)



## About 
[![${response.imgAlt}][product-screenshot]](${response.demoImg})



### Built with 
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Laravel](https://laravel.com)

 

## Demo
[demo](../assets/images/${response.demoGif}.gif)



### Installation
${response.installation}

\`\`\`
git clone ${response.cloneUrl}
\`\`\`
Run the command:
\`\`\`
${response.installCommand}
\`\`\`    

  

## Usage
${response.usageDetails}



## Contributing
${response.contribution}

 

## License
${response.licenses}



## Contact
${response.username} - ${response.yourEmail}

Project Link: [${response.projectURL}](${response.projectURL})
`

    return readMe;
}

// Function to write prompts to the file
function createFile(fileName, response) {
    fs.writeFile(fileName, response, (err) =>
        err ? console.log(err) : console.log('ReadMe Successfully written!!'))
}

function initialize() {
    inquirer.prompt(userPrompts).then(response =>
        createFile('sample.md', generateMd(response)));
}

// Calls the function to start the program
initialize();
