// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None of the above") {
    return `[License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None of the above") {
    return `This repo was built under the ${data.license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - ${renderLicenseLink(data.license)}
  - [Contributions](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  

  ## Description:
  ${data.about}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${renderLicenseSection(data.license)}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.test}
  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)
`;
}

module.exports = generateMarkdown;
