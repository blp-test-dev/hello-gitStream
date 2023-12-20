
const fs = require('fs');
const yaml = require('js-yaml');

const yamlFile = './watchlist.yml';

try {
  // Read the YAML file
  const yamlData = yaml.safeLoad(fs.readFileSync(yamlFile, 'utf8'));

  // Now you can work with the parsed YAML data as a JavaScript object
  console.log('Parsed YAML data:', yamlData);
} catch (error) {
  console.error('Error reading or parsing YAML:', error);
}

if (yamlData) {
    return yamlData;
}
