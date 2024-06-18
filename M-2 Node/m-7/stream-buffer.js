const http = require('http')
const fs = require('fs');
const { buffer } = require('stream/consumers');

//creating a sever using node

const server = http.createServer();

//server listerner

server.on('request', (req,res)=>{
    // console.log(req);

    if(req.url==='/read-file' && req.method==="GET"){
    


        // streaming file reading
        const readableStrem = fs.createReadStream(__dirname+'/texts/read.txt');

        readableStrem.on('data',buffer=>{
            res.write(buffer)
        })

        readableStrem.on('end',()=>{
            res.statusCode= 200;
            res.end('closed')
        })

        //error
        readableStrem.on('error',(err)=>{
           res.statusCode= 500;
           res.end('error')
        })
    }





})


server.listen(5000,()=>{
    console.log('listending on 5000')
})