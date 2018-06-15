var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var sys = require('util');
var net = require('net');
var mqtt = require('mqtt');

var server = app.listen(8080)


function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


var client = mqtt.connect('http://iot.eclipse.org')

client.options.reconnectPeriod = 0;


io.on('connection', function (socket) {
  socket.on('subscribe', function (data) {
    console.log('Subscribing to '+'outsinhala123');
    socket.join('outsinhala123');
    client.subscribe('outsinhala123');
  });
});

client.on('message', function(topic, message) {
  context = message.toString();
  //context = message;
  console.log(context);

  sys.puts(topic+'='+message);

  io.sockets.in(topic).emit('mqtt',{'topic': 'outsinhala123', 'payload':String(message)});
});

