var http=require('http');
const mqtt  = require('mqtt')
var client = mqtt.connect('mqtt://iot.eclipse.org');

var noble = require('noble');

var addressToTrack = 'dfb36e49584a';

var thisIsRssi=1;

var array1 = [];
var element = 1;

noble.on('discover', function(peripheral){
  //thisIsRssi = 1;
  if(peripheral.uuid == addressToTrack){
    //socket.emit('deviceData', {mac: peripheral.uuid, rssi:peripheral.rssi});
    //console.log(peripheral.rssi);
    thisIsRssi = peripheral.rssi;


}
});
var flag=0;
client.on('connect',function(){
setInterval(function(){
//client.publish('gadhala12345','cricket123!!!!!!!!');
var mean = 1;
if(array1.length==25){

const res = array1.filter(element => element == thisIsRssi);
console.log(res.length);

if(res.length==25){
//disconnected / switched off
//thisIsRssi=1;

client.publish('gadhala12345','1:1');
console.log(1+'here 1');
}
else{
client.publish('gadhala12345','1:'+thisIsRssi.toString());
console.log(thisIsRssi+'here ');
}

array1.splice(0,1);
array1.push(thisIsRssi);
}
else{
  //do nothing
  array1.push(thisIsRssi);
}
console.log(array1);

console.log('published!!!!!');
},200);


});


// Start scanning
noble.startScanning([],true);

console.log('Running on local:9000');