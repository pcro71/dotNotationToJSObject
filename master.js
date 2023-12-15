const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Paths to the scripts and files
const indexPath = path.join(__dirname, 'index.js');
const postProcessPath = path.join(__dirname, 'postProcess.js');
const inputAllPath = path.join(__dirname, 'input_all.csv');
const inputPath = path.join(__dirname, 'input.csv');
const outputFilePath = path.join(__dirname, 'output.js');
const masterDialogPath = path.join(__dirname, 'masterDialog.js');

// Function to run a script
function runScript(scriptPath, callback) {
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${scriptPath}: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Error in ${scriptPath}: ${stderr}`);
    }
    console.log(`Output of ${scriptPath}: ${stdout}`);
    callback();
  });
}

// Function to process each line in input_all.csv
function processLines(lines, index) {
  if (index >= lines.length) {
    console.log('All lines have been processed.');
    return;
  }

  // Copy the line to input.csv
  fs.writeFileSync(inputPath, lines[index], 'utf8');

  // Run the scripts for the current line
  runScript(indexPath, () => {
    runScript(postProcessPath, () => {
      console.log(`Scripts have finished executing for line ${index + 1}.`);
      insertIntoMasterDialog();
      processLines(lines, index + 1); // Process the next line
    });
  });
}

// Function to insert content into masterDialog.js
function insertIntoMasterDialog() {
  try {
    const outputContent = fs.readFileSync(outputFilePath, 'utf8');
    let masterDialogContent = fs.readFileSync(masterDialogPath, 'utf8');

    const exportDefaultIndex = outputContent.lastIndexOf('export default {');
    if (exportDefaultIndex === -1) {
      console.error('Export default not found in output.js');
      return;
    }
    const contentToCopy = outputContent.substring(0, exportDefaultIndex).trim();

    const exportDefaultContent = outputContent.substring(exportDefaultIndex);
    const match = exportDefaultContent.match(/export default \{([^\}]+)\};/);
    if (!match || match.length < 2) {
      console.error('Unable to extract export default content');
      return;
    }
    const exportValue = match[1].trim();

    let insertionPointContent = masterDialogContent.indexOf('module.exports = {');
    if (insertionPointContent === -1) {
      console.log('Insertion point not found in masterDialog.js, creating new module.exports structure.');
      masterDialogContent = 'module.exports = {\n};\n' + masterDialogContent;
      insertionPointContent = masterDialogContent.indexOf('module.exports = {');
    }

    masterDialogContent = masterDialogContent.slice(0, insertionPointContent) + contentToCopy + '\n\n' + masterDialogContent.slice(insertionPointContent);

    const insertionPointExportValue = masterDialogContent.lastIndexOf('};');
    if (insertionPointExportValue === -1) {
      console.error('Insertion point for export value not found in masterDialog.js');
      return;
    }
    
    // Check if there are existing entries in module.exports
    const existingEntries = masterDialogContent.substring(masterDialogContent.indexOf('{') + 1, insertionPointExportValue).trim();
    const newEntry = existingEntries ? `${exportValue},\n` : exportValue;
    
    masterDialogContent = masterDialogContent.slice(0, insertionPointExportValue) + newEntry + masterDialogContent.slice(insertionPointExportValue);
    fs.writeFileSync(masterDialogPath, masterDialogContent, 'utf8');
    console.log('masterDialog.js has been updated with new dialog:', exportValue);
  } catch (err) {
    console.error('Error during insertion into masterDialog.js:', err);
  }
}

// Read all lines from input_all.csv
const allLines = fs.readFileSync(inputAllPath, 'utf8').split('\n');

// Start processing lines
processLines(allLines, 0);