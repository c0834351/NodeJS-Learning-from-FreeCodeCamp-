//os module
const os = require('os')

/// info about current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log('THe system uptimes ' + os.uptime() + ' seconds');

//
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freMemory: os.freemem()
}
console.log(currentOS)