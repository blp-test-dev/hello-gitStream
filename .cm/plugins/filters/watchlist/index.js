const fs = require('fs');
const yaml = require('./watchlist.yml');

try {
  // Read the YAML file
  const yamlData = yaml.safeLoad(fs.readFileSync(yaml, 'utf8'));

  // Now you can work with the parsed YAML data as a JavaScript object
  console.log('Parsed YAML data:', yamlData);
  return yamlData;
} catch (error) {
  console.error('Error reading or parsing YAML:', error);
}


