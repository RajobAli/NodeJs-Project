const http = require('http');
const fs = require("fs");
const PORT = 3000;
const hostName = '127.0.0.1';
 const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/about"){
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/contract"){
        fs.readFile("Contract.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else {
        fs.readFile("error.html",(err,data)=>{
            res.writeHead(404,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
  
 })
 server.listen(PORT,hostName,()=>{
    console.log(`server is running at http://${hostName}:${PORT}`);
 })