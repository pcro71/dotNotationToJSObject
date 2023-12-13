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
    return;
  }

  let allDialogs = {}; // Object to store all dialogs

  try {
    // Process each row in the CSV data as a separate record
    inputs.forEach((record, recordIndex) => {
      let dialogObject = {}; // Object to store the current dialog

      record.forEach(cell => {
        const [path, ...rest] = cell.split(":");
        const value = rest.join(":").trim().replace(/"$/, "").replace(/^"/, "");

        createNestedObjectFromString(path, value, dialogObject);
      });

      // Assuming the first cell of each row contains the dialog name
      const dialogName = Object.keys(dialogObject)[0] + "Dialog";
      allDialogs[dialogName] = dialogObject;
    });
  } catch (error) {
    console.error("Error processing CSV data:", error);
    return;
  }

  // Convert allDialogs to string
  const allDialogsAsString = util.inspect(allDialogs, { depth: null, compact: false });
  const jsContent = `const Dialogs = ${allDialogsAsString};\n\nexport default Dialogs;`;

  // Write to output.js file
  fs.writeFileSync("output.js", jsContent, "utf8");
  console.log("output.js has been created.");
}

// Read file content and process
processCSV(fileContent).catch((error) => {
  console.error("An error occurred:", error);
});