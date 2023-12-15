const { google } = require('googleapis');
const fs = require('fs');

// Initialize the Sheets API client
const sheets = google.sheets({ version: 'v4' });

async function accessSpreadsheet(sheetId, outputFilePath) {
    // Initialize GoogleAuth with the required scopes
    const auth = new google.auth.GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();

    google.options({ auth: client });

    // Request the data from the 'to_export' sheet
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: 'to_export', // Specify the sheet name
    });

    // Convert the data to CSV format
    const csvData = arrayToCSV(response.data.values);

    // Write the CSV data to a file
    fs.writeFileSync(outputFilePath, csvData);
    console.log(`Data exported to ${outputFilePath}`);
}

// Helper function to convert array data to CSV string
function arrayToCSV(data) {
    return data.map(row => row.join(',')).join('\n');
}

// Use the function with the provided Google Sheet ID and output file path
const sheetId = '1Rottu2yAtMvq67jMXH_SKkL5ATW08Upf_sUwoYeUjm4'; // Google Sheet ID
const outputFilePath = 'exported.csv'; // Output CSV file path
accessSpreadsheet(sheetId, outputFilePath)
    .then(() => console.log('Spreadsheet exported as CSV'))
    .catch(console.error);