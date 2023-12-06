const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Helper function to convert single-quoted strings to double-quoted JSON strings
function convertToJSONString(value) {
  return value.replace(/'/g, '"').replace(/""/g, '"');
}

function setValue(obj, path, value) {
  let current = obj;
  const parts = path.split('.').map(part => part.replace(/:\s*$/, ''));

  parts.forEach((part, index) => {
    if (index === parts.length - 1) {
      const isArray = part.endsWith('[]');
      part = isArray ? part.slice(0, -2) : part;
      if (isArray) {
        current[part] = current[part] || [];
        current[part].push(JSON.parse(convertToJSONString(value)));
      } else {
        current[part] = JSON.parse(convertToJSONString(value));
      }
    } else {
      if (part.endsWith('[]')) {
        part = part.slice(0, -2);
        current[part] = current[part] || [];
        current = current[part];
      } else {
        current[part] = current[part] || {};
        current = current[part];
      }
    }
  });
}

// Read and parse the CSV file
const csvData = fs.readFileSync('input.csv', 'utf-8');
const records = parse(csvData, {
  columns: false,
  skip_empty_lines: true,
  relax_column_count: true,
  trim: true,
});

// Transform the CSV data into the desired JSON structure
const result = {};
records.forEach(([path, value]) => {
  if (path && value) {
    setValue(result, path, value);
  }
});

// Write the final JSON object to output.txt
fs.writeFileSync('output.txt', JSON.stringify(result, null, 2));
console.log('JSON output written to output.txt');
