// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return "";
  } else {
    return `\n![Application License](https://img.shields.io/badge/license-${license}-blue?style=for-the-badge)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return "\n- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `\n\n## License

This application is covered under the ${license} license.
`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}
- [Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.install}

## Usage

${data.usage}${renderLicenseSection(data.license)}

## How to contribute

${data.contribute}

## Tests

${data.testing}

## Questions

If you have any other questions my contact info is linked below.
- [My Github](https://github.com/${data.github})
- [Email me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
