const EventEmitter = require("events");  
const emitter = new EventEmitter();  
  

emitter.on("greet", (name) => {
    console.log(`[ Hello, ${name}! ]`);
});
emitter.on("timer", (msg, count) => console.log(msg, conter + ' times'));  


emitter.emit("greet", "Joe");


let conter = 1
setInterval(() => {  
  emitter.emit("timer", "hi there", conter);  
  conter++
}, 2000);