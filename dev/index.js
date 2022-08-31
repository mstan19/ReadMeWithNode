const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({projectName, purpose, installation, usage, license, contribution, tests, email, GHusername, GHlink, link }) =>
`# ${projectName}

## Table of Contents
-[Description](#description) 
-[Installation](#installation) 
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing) 
-[Tests](#tests) 
-[Questions](#questions) 
-[Depolyment](#depolyment)


## Description
 ${purpose}.

## Installation
To create this project, follow these several steps. ${installation}

## Usage
To use this application, ${usage}. 

This is what the ${projectName} will look like when deployed.

![${projectName} mock-up](./dev/assets/images/realreadmemockup.png)

## License
![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)


## Contributing
${contribution}

## Tests
${tests}

## Questions
For more information about this application, please email me at ${email}. Interested in my work? Checkout my GitHUb repositories. My GitHub username is ${GHusername}, and here is my GitHub profile: ${GHlink}.


## Depolyment
* Click on this link for deployed application
* ${link}
`;


inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'What is the purpose of this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Explain how to install this project?',
    },
    {
      type: 'input',
      name: 'usgae',
      message: 'Explain how to use this project? ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license(s) is/are required for this project?',
      choices: ['GPL 3.0', 'MIT', 'BSD 3', 'APACHE 2.0'],
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can other programmers contribute to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are some tests for your application?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
    },
    {
      type: 'input',
      name: 'GHusername',
      message: 'Enter your GitHub username.',
    },
    {
      type: 'input',
      name: 'GHlink',
      message: 'Enter a link to Git Hub profile.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the link for deployed application.',
    },
    ])
    .then((answers) => {
      const readMeContent = generateReadMe(answers);
  
      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.err("Failed to generate ReadMe file") : console.log('Successfully created README.md!')
      );
    });