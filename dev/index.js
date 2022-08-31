const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({projectName, purpose, email, github, GHlink, link }) =>
`# ${projectName}

## Description of the Project
The purpose of this assignment is to ${purpose}.
This is what the website will look like when deployed.

![ReadMeWithNode mock-up](./images/readmeGenerated.png)

##Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Questions](#questions)
-[Depolyment](#depolyment)

##Installation


##Usage


##Contributing


##Tests


##Questions
For more information about this application, please email me at ${email}. Interested in my work? Checkout my GitHUb repositories. My GitHub username is ${github}, and here is my GitHub profile: ${GHlink}.


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
  
      fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.err("Failed to generate ReadMe file") : console.log('Successfully created README.md!')
      );
    });