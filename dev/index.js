const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({projectName, purpose, files, refactored1, refactored2, refactored3, refactored4, link }) =>
`# ${projectName}
The purpose of this assignment is to ${purpose}.

## Website Screenshot
This is what the website will look when ${files}.

![PasswordGenerator mock-up](./images/passwordgenemockup.png)

## How Code Was Refactored
* ${refactored1}.
* ${refactored2}.
* ${refactored3}.
* ${refactored4}.

## How to deploy the link application
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
      message: 'Complete this sentence. The purpose of this assignment is to:',
    },
    {
      type: 'input',
      name: 'files',
      message: 'Complete this sentence. This is what the website will look when:... When what files are modified/added?',
    },
    {
      type: 'input',
      name: 'refactored1',
      message: 'Give one way, the code was refactored? ',
    },
    {
      type: 'input',
      name: 'refactored2',
      message: 'Give another way, the code was refactored?',
    },
    {
      type: 'input',
      name: 'refactored3',
      message: 'What is another way the code was refactored?',
    },
    {
      type: 'input',
      name: 'refactored4',
      message: 'Finally, give another the code was refactored?',
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the link for deployed application.',
    },
    ])
    .then((answers) => {
      const readMeContent = generateReadMe(answers);
  
      fs.writeFile('readme.md', readMeContent, (err) =>
        err ? console.err("Failed to generate ReadMe file") : console.log('Successfully created readMe.md!')
      );
    });