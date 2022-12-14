const fs = require('fs');

function renderLicense(licenseInfo) {
    switch(licenseInfo.license) {   
      case 'MIT' :
          licenseInfo.badge = 'https://img.shields.io/badge/license-MIT-brightgreen';
          licenseInfo.url = 'https://choosealicense.com/licenses/mit/';
          break;
      case 'GNU GPLv3' : 
          licenseInfo.badge = 'https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen';
          licenseInfo.url = 'https://choosealicense.com/licenses/gpl-3.0/';
          break;
      case 'Apache 2.0' :
          licenseInfo.badge = 'https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen';
          licenseInfo.url = 'https://choosealicense.com/licenses/apache-2.0/';
          break;
      case 'ISC' :
          licenseInfo.badge = 'https://img.shields.io/badge/license-ISC-brightgreen';
          licenseInfo.url = 'https://choosealicense.com/licenses/isc/';
          break;
      default:
          licenseInfo.badge = '';
          licenseInfo.url = '';
          break; 
      }
      return licenseInfo;
    }

function generateMarkdown(data, licenseInfo) {
  var markdownText = `# ${data.title}\n ## Description\n ---\n ${data.description}\n ## Table of Contents\n [Installation](#installation)  
   [Usage](#usage)  
    [License](#license)  
     [How to Contribute](#contribute)  
      [Tests](#tests)  
       [Contact Me](#contact)\n ## Installation\n ---\n Use ${data.dependCmd} to install dependencies.\n ## Usage\n ---\n ${data.usage}\n ## License\n ---\n ![](${licenseInfo.badge}) [Click here for more information about the ${licenseInfo.license} license.](${licenseInfo.url})\n \n ## Contribute\n ---\n ${data.contributions}\n ## Tests\n ---\n Run tests using the ${data.testsCmd} command.\n ## Contact\n ---\n Github: [${data.ghUserName}](https://github.com/mg8955)\nEmail: ${data.emailAddress}\n`;
  
  fs.writeFile('README.md', markdownText, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

module.exports = {
  generateMarkdown,
  renderLicense
};