const http = require('http');
const fs = require('fs');
const app = require('./app')
const app2 = require('./app2')

function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./index.html',null, (error, data)=>{
        if(error){
            response.writeHead(404);
            response.write('File not found!');
        }
        else{
            response.write(data);
        }
        response.end();
    });
    //response.write(app2.myVariable);
    //app2.myFunction();
    //response.end();
}

http.createServer(onRequest).listen(8000);

