const fs = require('fs');
const path = require('path');

function setValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastKeyIsArray = lastKey.endsWith('[]');

    // iterate through all the object keys on left side of :, create object, and attach to current
    let current = obj;
    keys.forEach(key => { 
        if (!current[key]) { // checks if the current object (which initially points to obj) does not have a property with the name of the current key. 
            current[key] = {}; // creates a new object and assigns it to that property
        }
        current = current[key];
    });

    if (lastKeyIsArray) {
        const arrayKey = lastKey.slice(0, -2);
        if (!current[arrayKey]) {
            current[arrayKey] = [];
        }
        current[arrayKey].push(value);
    } else {
        current[lastKey] = value;
    }
}

function parseAndSet(obj, input) {
    const [path, rawValue] = input.split(':', 2);
    const trimmedValue = rawValue.trim();
    let value;

    // Check if the value is intended to be a JSON object
    if (trimmedValue.startsWith('{') && trimmedValue.endsWith('}')) {
        // Correctly parsing JSON object from the string
        try {
            value = JSON.parse(trimmedValue);  // DO I NEED TO BE DOING THIS?
        } catch (e) {
            console.error('Error parsing JSON:', e);
            return;
        }
    } else {
        // If not JSON, treat as a string and remove surrounding quotes
        value = trimmedValue.replace(/^'(.*)'$/, '$1');
    }

    setValue(obj, path, value);
}

// Example usage
const obj = {};
const inputs = [
    "zip.commands.isFieldPresent.systemValidators.validators[]:{name: 'fieldPresent', params: {fieldName: 'zip'}}",
    "zip.commands.isFieldPresent.systemValidators.valid.commands[]:'nextCommand:onFieldPresent'",
    "zip.commands.isFieldPresent.systemValidators.invalid.commands[]:'nextCommand:onFieldEmpty'",
    "zip.commands.onFieldPresent.systemMessage:'We have your zip code as zip:spelledOut. Is this correct?'"
];

inputs.forEach(input => parseAndSet(obj, input));

const outputPath = path.join(__dirname, 'output.txt');

console.log('Final object:', JSON.stringify(obj, null, 2));
console.log('Attempting to write to:', outputPath);

try {
    // Explicitly specifying encoding to ensure correct file format
    fs.writeFileSync(outputPath, JSON.stringify(obj, null, 2), 'utf8');
    console.log('Output saved to', outputPath);
} catch (err) {
    console.error('Error writing to file:', err);
}