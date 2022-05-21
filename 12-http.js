//http module

const http =require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('this is the about page');
    }
    res.end(`
    <h1> Oops!<h1>
    <p> We are not able to load this page<p>
    <a href = "/">back home</a>`)

})
server.listen(6080);


//about lodlash package

// const _ =require('lodash');

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems);
// console.log("hello puppy");
