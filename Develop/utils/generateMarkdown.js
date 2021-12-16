// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  <h1>### ${data.title}</h1>

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  <h2>##Description</h2>
  ${data.description}

  <h2>##Installation</h2>
  ### ${data.installation}

  <h2>##Usage</h2>
  ### ${data.usage}

  <h2>##Contributing</h2>
  ### ${data.contributing}

  <h2>##Tests</h2>
  ### ${data.tests}

  <h2>##Questions</h2>
  ### https://github.com/${data.github}

  ### If you would like to reach me, please email me at ${data.email}

`;
}

module.exports = generateMarkdown;
