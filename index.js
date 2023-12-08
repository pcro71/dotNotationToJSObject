const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Read the CSV file
const fileContent = fs.readFileSync('input.csv', 'utf8');

function parseCSV(fileContent) {
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

function createNestedObjectFromString(path, value, obj) {
    const keys = path.split(".");
  
    keys.reduce((acc, key, index) => {
        if (index === keys.length - 1) {
            if (key.endsWith("[]")) {
                const parsedKey = key.replace("[]", "");
                acc[parsedKey] ||= [];

                // Split the value string by comma and parse each part as an object
                const values = value.split(/(?<=\}),\s*(?=\{)/);
                values.forEach(val => {
                    const parsedValue = val.startsWith("{") ? eval(`(${val})`) : val;
                    acc[parsedKey].push(parsedValue);
                });
            } else {
                const parsedValue = value.startsWith("{") ? eval(`(${value})`) : value;
                acc[key] = parsedValue;
            }
        } else {
            acc[key] = acc[key] || {};
        }
        return acc[key];
    }, obj);
}
  
  async function processCSV(fileContent) {
    try {
        // Parse the CSV content
        const inputs = await parseCSV(fileContent);
        console.log('inputs:', inputs);

        // Process the parsed data
        const output = inputs.reduce((acc, input) => {
            // Directly access the first element of the input array and split it
            const [path, ...rest] = input[0].split(":");
            const value = rest
                .join(":")
                .trim()
                .replace(/^'/, "")
                .replace(/'$/, "")
                .replace(/'/g, '"');
          
            console.log('path:', path);
            console.log('value:', value);

            createNestedObjectFromString(path, value, acc);
          
            return acc;
        }, {});

        console.log(util.inspect(output, { depth: null }));

        return output;
    } catch (error) {
        console.error("Error processing CSV:", error);
    }
}

processCSV(fileContent);


// (async () => {
//     try {
//         const parsedData = await parseCSV(fileContent);
//         const obj = {};

//         parsedData.forEach(innerArray => parseAndSet(obj, innerArray));

//         // Log the final object here, after processing all data
//         console.log('Final object:', JSON.stringify(obj, null, 2));
//     } catch (error) {
//         console.error("Error: ", error);
//     }
// })();

// (async () => {
//     try {
//         const parsedData = await parseCSV(fileContent);
//         const obj = {};

//         parsedData.forEach(innerArray => parseAndSet(obj, innerArray));

//         // Extract the object name from the parsed data
//         let objectName = obj['zip'] && obj['zip']['contextFieldName'] ? obj['zip']['contextFieldName'] : 'Default';
//         objectName += 'Dialog';

//         // Ensure objectName is a valid JavaScript identifier
//         objectName = objectName.replace(/[^a-zA-Z0-9$_]/g, '');

//         // Construct the module content
//         const outputPath = path.join(__dirname, 'output.js');
//         console.log('Attempting to write to:', outputPath);

//         const moduleContent = `const ${objectName} = ${JSON.stringify(obj, null, 2)};\nexport default ${objectName};`;
//         fs.writeFileSync(outputPath, moduleContent, 'utf8');
//         console.log('Module saved to', outputPath);

//     } catch (error) {
//         console.error("Error: ", error);
//     }
// })();