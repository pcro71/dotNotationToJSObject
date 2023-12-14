const fs = require("fs");
const path = require("path");

// Path to the output file
const outputFile = path.join(__dirname, "output.js");

// Read the content of the output file
fs.readFile(outputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Process the file content
  let lines = data.split('\n');
  lines = lines.map(line => {
    // Replace single quotes with double quotes, but preserve apostrophes in contractions
    let modifiedLine = line.replace(/(\w)'(\w)/g, "$1\\'$2")  // Escape valid apostrophes
                           .replace(/'/g, '"')               // Replace all single quotes with double quotes
                           .replace(/\\'/g, "'");            // Unescape valid apostrophes

    // Replace \" with just an apostrophe
    return modifiedLine.replace(/\\"/g, "'");
  });

  // Filter out lines that only have '"": ""'
  lines = lines.filter(line => !line.trim().match(/^"": ""$/));

  // Join the lines back together
  let modifiedData = lines.join('\n');

  // Write the modified content back to the file
  fs.writeFile(outputFile, modifiedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File has been updated.");
  });
});
