//CommonJS , Every file is a module (by default)
//Modules - Encapsulate Code (only share minimum)

// const secret = 'SUPER_SECRET'
// const name1 ='sai';
// const name2 = 'bhatta';

// const sayHello = (name) =>{
//     console.log('Hi there '+ name);
// }

const names = require('./4-names');
const sayHello = require('./5-utils');
const objPerson = require('./6-alternative-flavor')
console.log(objPerson);

// sayHello('snehitha');
// sayHello(names.name1);
// sayHello(names.name2);

const addSub = require('./7-mind-grenade');
console.log(addSub);