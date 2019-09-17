const EventEmitter = require('events').EventEmitter;
function Dog(name,energy){
  var _name=_energy;
  var that=this;
  EventEmitter.call(this);
  _name=name;
  _energy=energy;
  var time = setInterval(()=>{
    if(energy > 0){
      that.emit('bark');
      energy--;
    }else{
      clearInte
    }
  })
}
Dog.prototype=EventEmitter.prototype;
modle.exports=Dog;
