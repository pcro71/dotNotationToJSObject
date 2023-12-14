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

  // Find the insertion point
  const insertionPoint = masterDialogContent.indexOf('module.exports = {');
  if (insertionPoint === -1) {
    console.error('Insertion point not found in masterDialog.js');
    return;
  }

  // Insert the output content two lines above the insertion point
  masterDialogContent = masterDialogContent.slice(0, insertionPoint) + outputContent + '\n\n' + masterDialogContent.slice(insertionPoint);

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