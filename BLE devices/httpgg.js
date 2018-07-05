var http=require('http');
const mqtt  = require('mqtt')
var client = mqtt.connect('mqtt://iot.eclipse.org');

var noble = require('noble');

var addressToTrack = 'dfb36e49584a';

var thisIsRssi=0.00;


noble.on('discover', function(peripheral){
  if(peripheral.uuid == addressToTrack){
    //socket.emit('deviceData', {mac: peripheral.uuid, rssi:peripheral.rssi});
    //console.log(peripheral.rssi);
    thisIsRssi = peripheral.rssi;
}

});

client.on('connect',function(){
setInterval(function(){
//client.publish('outsinhala12345','cricket123!!!!!!!!');
client.publish('gadhala12345',thisIsRssi.toString());
console.log(thisIsRssi);

console.log('published!!!!!');
},200);


});

	http.createServer(function(req,res){
		res.writeHead(404);
		res.end(thisIsRssi.toString());
		console.log(thisIsRssi.toString());



}).listen(9001);



// Start scanning
noble.startScanning([],true);

console.log('Running on local:9000');


