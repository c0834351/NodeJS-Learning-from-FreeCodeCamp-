//seInterval is asynchronous
console.log("starting");
setInterval(()=>{
    console.log("Hello!!");
}, 2000);
console.log("I will run first");
//process stays alive unless kill the process control+c
//unexpected error