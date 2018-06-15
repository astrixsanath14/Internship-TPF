var mqtt = require('mqtt')
var client  = mqtt.connect('http://iot.eclipse.org')
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
  //res.writeHead(200,{'Content-Type': 'text/html'});
  //res.end('Hello, World!');
  //res.write('Helooo');
  //res.write(context);
  //console.log(context);
  var tempData= context.split(":");
  var finalData= "Value of X is : "+tempData[0]+"\nValue of Y is : "+tempData[1]+"\nValue of Z is :"+tempData[2]+"\n";
  res.write(finalData);
  tempData[0]=parseFloat(tempData[0]);
  tempData[1]=parseFloat(tempData[1]);
  tempData[2]=parseFloat(tempData[2]);
  //res.write(typeof(tempData[0]));
  //res.write((tempData[0]*tempData[1]*tempData[2]).toString());
  res.end();
}).listen(9001);