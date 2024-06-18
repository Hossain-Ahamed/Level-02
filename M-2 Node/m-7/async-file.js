const fs = require('fs')

//reading text asynchronusly

fs.readFile('./texts/read.txt','utf-8',(err,data)=>{

 if(err){
    throw  Error('error reading')
 }

 console.log(data)

 
})