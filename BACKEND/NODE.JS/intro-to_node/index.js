// create a constant of file system and do all the functionality

const fs=require('node:fs');

// destination.txt will be created or overwritten by default.
fs.copyFileSync('text1.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

fs.appendFileSync("text1.txt"," I am appended");