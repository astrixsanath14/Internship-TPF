var mqtt = require('mqtt')
var client  = mqtt.connect('http://iot.eclipse.org')
var http=require('http');
client.on('connect', function () {
    client.subscribe('outsinhala123')
})
client.on('message', function (topic, message) {
context = message.toString();
console.log(context)
})
http.createServer(function(req,res){
  res.writeHead(404);
  //res.end('Hello, World!');

  res.end(context);
}).listen(9001);





