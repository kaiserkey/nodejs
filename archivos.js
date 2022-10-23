
const { writeFile } = require('fs/promises');

const file = [];
let content = "'use strict'";

for (let i = 0; i < 40; i++) {
    file.push("clase_"+i+".js");
}

async function writeToFile(fileName, data) {
    try {
        await writeFile(fileName, data);
        console.log(`Wrote data to ${fileName}`);
    } catch (error) {
        console.error(`Got an error trying to write the file: ${error.message}`);
    }
}

for (let i = 0; i < file.length; i++) {
    writeToFile(file[i], content);
} 