const fs = require('fs')

const readtxt = fs.readFileSync('./texts/read.txt','utf8');
console.log(readtxt)


//writing
const writetxt = fs.writeFileSync('./texts/write.txt',readtxt+" this is new ",)
console.log(writetxt)