// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![License Badge](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

[${data.username}](https://github.com/${data.username})

${data.email}

If you have any questions about the project you can reach me at the above email.
`;
}

module.exports = generateMarkdown;
