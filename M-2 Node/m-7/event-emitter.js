const EventEmiter = require('events');

const myEmitter = new EventEmiter();
//listner
myEmitter.on('bday', ()=>{
    console.log('hbd')
})

myEmitter.on('bday', (gift)=>{
    console.log(`send u a ${gift}`)
})

myEmitter.emit('bday','ghori')

