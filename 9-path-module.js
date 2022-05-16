//path module

const path = require('path')
console.log(path.sep)

//to see full name of the file
const filepath = path.join('content','subfolder','test.txt')
console.log(filepath);

//to see only base of the filename
const base = path.basename(filepath)
console.log(base);

//full director path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);


