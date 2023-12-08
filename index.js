const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Read the CSV file
const fileContent = fs.readFileSync('input.csv', 'utf8');

async function parseCSV(fileContent) {
    return new Promise((resolve, reject) => {
        Papa.parse(fileContent, {
            header: false,
            skipEmptyLines: true,
            complete: function(results) {
                resolve(results.data);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}

function setValue(obj, path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const lastKeyIsArray = lastKey.endsWith('[]');

    let current = obj;
    keys.forEach(key => {
        if (!current[key]) {
            current[key] = {};
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

function parseAndSet(obj, innerArray) {
    if (innerArray.length === 0) {
        console.log('Empty array');
        return;
    }

    let input = innerArray[0];
    if (input.startsWith("'") && input.endsWith("'")) {
        input = input.slice(1, -1);
    }

    const colonIndex = input.indexOf(':');
    if (colonIndex === -1) {
        console.log('No colon found in the string');
        return;
    }

    const path = input.substring(0, colonIndex).trim();
    const rawValue = input.substring(colonIndex + 1).trim();

    setValue(obj, path, rawValue);
}

(async () => {
    try {
        const parsedData = await parseCSV(fileContent);
        const obj = {};

        parsedData.forEach(innerArray => parseAndSet(obj, innerArray));

        // Log the final object here, after processing all data
        console.log('Final object:', JSON.stringify(obj, null, 2));
    } catch (error) {
        console.error("Error: ", error);
    }
})();

(async () => {
    try {
        const parsedData = await parseCSV(fileContent);
        const obj = {};

        parsedData.forEach(innerArray => parseAndSet(obj, innerArray));

        // Extract the object name from the parsed data
        let objectName = obj['zip'] && obj['zip']['contextFieldName'] ? obj['zip']['contextFieldName'] : 'Default';
        objectName += 'Dialog';

        // Ensure objectName is a valid JavaScript identifier
        objectName = objectName.replace(/[^a-zA-Z0-9$_]/g, '');

        // Construct the module content
        const outputPath = path.join(__dirname, 'output.js');
        console.log('Attempting to write to:', outputPath);

        const moduleContent = `const ${objectName} = ${JSON.stringify(obj, null, 2)};\nexport default ${objectName};`;
        fs.writeFileSync(outputPath, moduleContent, 'utf8');
        console.log('Module saved to', outputPath);

    } catch (error) {
        console.error("Error: ", error);
    }
})();