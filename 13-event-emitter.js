//get back the class
//if want custom extend the class
//otherwise just for event handling and emitting create instance

const EventEmitter = require('events');


const custonEmitter = new EventEmitter();

//on and emit methodds
//keep track of the order
//additional arguments
//built-in modules utilize it

custonEmitter.on('response', (name, id)=> {
    console.log("data received: " + name + " " +id);
});
custonEmitter.on('response', ()=> {
    console.log("some other data received");
});

custonEmitter.emit('response', 'sneha',24);