const fs = require('fs');
const { parse } = require('csv-parse/sync');
const safeEval = require('safe-eval'); // You may need to install this package

function isJSONLike(value) {
    return value.startsWith('{') && value.endsWith('}');
}

function convertToJsObject(value) {
    if (isJSONLike(value)) {
        return safeEval('(' + value + ')');
    } 
    return value.startsWith('"') && value.endsWith('"') ? value.slice(1, -1) : value;
}

function setNestedValue(target, path, value) {
    let current = target;
    let parts = path.split('.').map(part => part.replace(/:\s*$/, '').replace(/\[\]$/, ''));

    parts.forEach((part, index) => {
        const isArray = path.includes('[]') && index === parts.length - 1;
        if (isArray) {
            current[part] = current[part] || [];
            current[part].push(convertToJsObject(value));
        } else if (index === parts.length - 1) {
            current[part] = convertToJsObject(value);
        } else {
            current[part] = current[part] || {};
            current = current[part];
        }
    });
}

const inputFile = 'input.tsv'; // Your input TSV file
const outputFile = 'output.js'; // Output file

const tsvData = fs.readFileSync(inputFile, 'utf-8');

const records = parse(tsvData, {
    delimiter: '\t',
    relax_column_count: true,
    skip_empty_lines: true,
});

const result = {};
records.forEach(([path, value]) => {
    if (path && value !== undefined) {
        setNestedValue(result, path, value);
    }
});

const outputString = 'const data = ' + JSON.stringify(result, null, 2) + ';';
fs.writeFileSync(outputFile, outputString);
console.log('JavaScript object output written to output.js');
