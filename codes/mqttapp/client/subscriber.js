var mqtt = require('mqtt')
var client  = mqtt.connect('http://iot.eclipse.org');
var http=require('http');
client.on('connect', function () {
    client.subscribe('outsinhala123')
})

client.on('message', function (topic, message) {
context = message.toString();
//context = message;
console.log(context);
})

http.createServer(function(req,res){
  var finalData=context.toString();
  res.write(finalData);

  res.end();
}).listen(9001);