const fs = require("fs");
const util = require("util");
const Papa = require("papaparse");

// Read the CSV file
const fileContent = fs.readFileSync("input.csv", "utf8");

function parseCSV(fileContent) {
  return new Promise((resolve, reject) => {
    Papa.parse(fileContent, {
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        resolve(results.data);
      },
      error: function (error) {
        reject(error);
      },
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
        const parsedValue = value.startsWith("{")
          ? eval(`([${value}])`)
          : [value];
        acc[parsedKey] = [...acc[parsedKey], ...parsedValue];
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
  let inputs;
  try {
    inputs = await parseCSV(fileContent);
  } catch (error) {
    console.error("Error parsing CSV:", error);
  }

  let output = {};

  try {
    // Process the parsed data
    output = inputs.reduce((acc, input) => {
      // Directly access the first element of the input array and split it
      const [path, ...rest] = input[0].split(":");
      const value = rest.join(":").trim().replace(/"$/, "").replace(/^"/, "");

      createNestedObjectFromString(path, value, acc);

      return acc;
    }, {});
  } catch (error) {
    console.error("Error processing CSV data:", error);
  }

  //console.log(util.inspect(output, { depth: null }));

  // Extract the key for the object name and construct the file content
  const firstKey = Object.keys(output)[0];
  const objectName = firstKey + "Dialog";
  const objectAsString = util.inspect(output, { depth: null, compact: false });
  const jsContent = `const ${objectName} = ${objectAsString};\n\nexport default ${objectName};`;

  // Write to output.js file
  fs.writeFileSync("output.js", jsContent, "utf8");
  console.log("output.js has been created.");
}

// Read file content and process
processCSV(fileContent).catch((error) => {
  console.error("An error occurred:", error);
});