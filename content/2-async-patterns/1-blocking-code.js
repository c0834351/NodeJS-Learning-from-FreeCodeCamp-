const http = require('http');

const server = http.createServer((req, res)=>{
      
    if(req.url === '/'){
        res.end('we are in home page');
    }
    if(req.url === '/about'){
        //BLOCKING CODE
        for(let i=0; i< 1000; i++){
            for(let j=0; j < 1000; j++){
                console.log(i + " " + j);
            }
        }
        res.end("we are in about page");
    }
    res.end("error page")
});

server.listen(5080, ()=>{
    console.log("server is listening on port : 5080");
});