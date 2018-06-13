var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://172.16.11.18');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', 'Hello mqtt');
console.log('Message Sent');
}, 5000);
});