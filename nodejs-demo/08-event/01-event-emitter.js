const EventEmitter = require('events').EventEmitter
var e= new EventEmitter();
setInterval(function(){
  e.emit('hello');
},1000);
setTinmeout(function(){
  e.emit('bey';)
},5000);
e.on('hello',function(){
  console.log('hello event emit!');
});
e.on('bey,functin'){

}
