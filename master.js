const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Paths to the scripts and files
const indexPath = path.join(__dirname, 'index.js');
const postProcessPath = path.join(__dirname, 'postProcess.js');
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

// Function to insert content into masterDialog.js
function insertIntoMasterDialog() {
  const outputContent = fs.readFileSync(outputFilePath, 'utf8');
  let masterDialogContent = fs.readFileSync(masterDialogPath, 'utf8');

  // Extract content before the last 'export default {'
  const exportDefaultIndex = outputContent.lastIndexOf('export default {');
  if (exportDefaultIndex === -1) {
    console.error('Export default not found in output.js');
    return;
  }
  const contentToCopy = outputContent.substring(0, exportDefaultIndex).trim();

  // Extract the value inside 'export default { ... }'
  const exportDefaultContent = outputContent.substring(exportDefaultIndex);
  const match = exportDefaultContent.match(/export default \{([^\}]+)\};/);
  if (!match || match.length < 2) {
    console.error('Unable to extract export default content');
    return;
  }
  const exportValue = match[1].trim();

  // Find the insertion point for the content in masterDialog.js
  const insertionPointContent = masterDialogContent.indexOf('module.exports = {');
  if (insertionPointContent === -1) {
    console.error('Insertion point not found in masterDialog.js');
    return;
  }

  // Insert the output content two lines above the 'module.exports = {'
  masterDialogContent = masterDialogContent.slice(0, insertionPointContent) + contentToCopy + '\n\n' + masterDialogContent.slice(insertionPointContent);

  // Find the insertion point for the export value in masterDialog.js
  const insertionPointExportValue = masterDialogContent.lastIndexOf('};');
  if (insertionPointExportValue === -1) {
    console.error('Insertion point for export value not found in masterDialog.js');
    return;
  }

  // Insert the export value
  masterDialogContent = masterDialogContent.slice(0, insertionPointExportValue) + ',\n  ' + exportValue + masterDialogContent.slice(insertionPointExportValue);

  // Write the modified content back to masterDialog.js
  fs.writeFileSync(masterDialogPath, masterDialogContent, 'utf8');
  console.log('masterDialog.js has been updated.');
}

// Run index.js and then postProcess.js
runScript(indexPath, () => {
  runScript(postProcessPath, () => {
    console.log('Both scripts have finished executing.');
    // After finishing both scripts, perform the content insertion
    insertIntoMasterDialog();
  });
});