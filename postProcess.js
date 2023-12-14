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

  // Replace single quotes with double quotes, but preserve apostrophes in contractions
  let modifiedData = data.replace(/(\w)'(\w)/g, "$1\\'$2")  // Escape valid apostrophes
                         .replace(/'/g, '"')               // Replace all single quotes with double quotes
                         .replace(/\\'/g, "'");            // Unescape valid apostrophes

  // Replace \" with just an apostrophe
  modifiedData = modifiedData.replace(/\\"/g, "'");

  // Write the modified content back to the file
  fs.writeFile(outputFile, modifiedData, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File has been updated.");
  });
});
