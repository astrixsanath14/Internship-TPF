var mqtt = require('mqtt');
var client  = mqtt.connect('http://iot.eclipse.org');
client.on('connect', function () {
setInterval(function() {
client.publish('outsinhala123', 'Hello mqtt');
console.log('Message Sent');
}, 5000);
});