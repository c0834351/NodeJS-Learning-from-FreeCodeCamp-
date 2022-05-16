//file system module (fs)
//synchronous means blocking

//const fs = require('fs')
const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first + '\n' + second);

//flag = a means append the data to previous data
writeFileSync('./content/result-sync.txt','Here is the result: ' + (first+second),{flag: 'a'});
console.log('Done with the task');
console.log('starting the next one');