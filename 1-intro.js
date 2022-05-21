//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
//or
//npm init (step by step, press enter to skip)
//npm init -y (everything defult)


const amount = 12

if (amount<11){
    console.log('greater')
}
else{
    console.log('less')
}
console.log('nothing');