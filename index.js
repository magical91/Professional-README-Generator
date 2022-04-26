// TODO: Include packages needed for this application
const fs = require('fs');
const path = require("path");
const inquirer = require('inquirer');
const generatePage = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  // name of the project
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    }
  },
  // desciption of the project
  {
    type: 'input',
    name: 'about',
    message: 'Enter a short description about the project.',
  },
  // installation instructions for the project
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log("Enter the steps of installation to continue!");
        return false;
      }
    }
  },
  // usage information
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log("Enter information on how to use project!");
        return false;
      }
    }
  },
  // licensing 
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license that will suit your project',
    choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
    validate: licenseChoices => {
      if (licenseChoices) {
        return true;
      } else {
        console.log("Select a license for your project!");
        return false;
      }
    }
  },
  // contributors
  {
    type: 'input',
    name: 'contribution',
    message: 'How can other users contribute to this project?',
    validate: contributionsInput => {
      if (contributionsInput) {
        return true;
      } else {
        console.log("Provide details of how to contribute to your project!");
        return false;
      }
    }
  },
  // test instructions
  {
    type: 'input',
    name: 'test',
    message: 'How does the user test this project?',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log("Please describe briefly how to test this project");
        return false;
      }
    }
  },
  // github username
  {
    type: 'input',
    name: 'github',
    message: 'Enter your your Github username (Required)',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Enter GitHub username!");
        return false;
      }
    }
  },
  // email address
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email in case anyone has any questions about the project:',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 fs.writeFileSync(path.join(process.cwd(), fileName), data)

  console.log("Success! You can now preview your README file")  

  
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log(userInput)
    writeToFile("README.md", generatePage(userInput));
  });
};

// Function call to initialize app
init();
