const fs = require('fs');

// Function to read a text file
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

// Function to modify content and write to a new file
function modifyAndWriteFile(inputFilePath, outputFilePath, callback) {
    readFile(inputFilePath, (err, data) => {
        if (err) {
            return callback(err);
        }

        // Modify content (example: convert to uppercase)
        const modifiedContent = data.toUpperCase();

        // Write to a new file
        fs.writeFile(outputFilePath, modifiedContent, 'utf8', (err) => {
            if (err) {
                return callback(err);
            }
            callback(null, 'File modified and written successfully!');
        });
    });
}

// Example usage
const inputFile = 'input.txt';
const outputFile = 'output.txt';

modifyAndWriteFile(inputFile, outputFile, (err, message) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log(message);
    }
});
