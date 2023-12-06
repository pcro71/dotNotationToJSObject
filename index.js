const fs = require('fs');
const path = require('path');

// Path to the input.txt file
const inputFile = path.join(__dirname, 'input.txt');

// Read the contents of the file
let fileContents;
try {
    fileContents = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
    console.error('Error reading the file:', err);
    return;
}

// Split the file content into lines
const inputs = fileContents.split(/\r?\n/).map(line => {
    // Trim the line
    line = line.trim();

    // Escape single quotes and replace double quotes with single quotes
    line = line.replace(/'/g, "\\'").replace(/"/g, '"').replace(/\\'/g, "'").replace(/"/g, '');
    //line = line.replace(/'/g, "\\'").replace(/"/g, '"').replace(/\\'/g, "'");

    console.log('line after escaping apostrophe and replacing double quotes for single:', line);

    return line;
});



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
    const colonIndex = input.indexOf(':');
    if (colonIndex === -1) {
        console.log('No colon found in the string');
        return; // or handle the case as needed
    }

    const path = input.substring(0, colonIndex);
    const rawValue = input.substring(colonIndex + 1);

    // console.log('path:', path);
    // console.log('rawValue:', rawValue);

    const trimmedValue = rawValue.trim();
    let value;

    // Check if the value is intended to be a JSON object
    if (trimmedValue.startsWith('{') && trimmedValue.endsWith('}')) {
        value = trimmedValue;
        if ((trimmedValue.startsWith("'{") || trimmedValue.startsWith('{"')) && 
            (trimmedValue.endsWith("}'") || trimmedValue.endsWith('"}'))) {
            // Remove the first and last characters (quotes and braces)
            value = trimmedValue.slice(1, -1);
        }
    } else {
        // If not JSON, treat as a string and remove surrounding quotes
        value = trimmedValue.replace(/^'(.*)'$/, '$1');
    }

    setValue(obj, path, value);
}

// Example usage
const obj = {};

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