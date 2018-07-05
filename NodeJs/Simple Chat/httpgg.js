var http=require('http');


var noble = require('noble');

var addressToTrack = 'dfb36e49584a';

var thisIsRssi;


noble.on('discover', function(peripheral){
  if(peripheral.uuid == addressToTrack){
    //socket.emit('deviceData', {mac: peripheral.uuid, rssi:peripheral.rssi});
    console.log(peripheral.rssi);
    thisIsRssi = peripheral.rssi;
}

});

	http.createServer(function(req,res){
		res.writeHead(404);
		res.end(thisIsRssi.toString());
		//console.log(peripheral.rssi);


	}).listen(9000);



noble.startScanning([], true)

console.log('Running on local:9000');


