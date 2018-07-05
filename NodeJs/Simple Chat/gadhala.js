/*<html>


<body>
*/



  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
  <script type = "text/javascript"
       src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


var http=require('http');

var noble = require('noble');

var addressToTrack = 'dfb36e49584a';

var thisIsRssi;

//this is where i'm checking for addressToTrack
noble.on('discover', function(peripheral){
  if(peripheral.uuid == addressToTrack){
    //socket.emit('deviceData', {mac: peripheral.uuid, rssi:peripheral.rssi});
    console.log(peripheral.rssi);
    thisIsRssi = peripheral.rssi;

    send_message();
}

});

	/*http.createServer(function(req,res){
		res.writeHead(404);
		res.end(thisIsRssi.toString());
		//console.log(peripheral.rssi);


	}).listen(9000);*/

  var mqtt;
  var reconnectTimeout = 2000;
  var host="iot.eclipse.org";
  var port=1883;
  //OR ......
  //var host="broker.hivemq.com";
  //var port=8000;





  function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Connected ");
  //mqtt.subscribe("outsinhala123");
  /*mqtt.onMessageArrived = function (message) {
  //console.log("Live Feed: " + message.payloadString);
  var tempData=message.payloadString.split(',');
  var xGyro=parseFloat(tempData[0].split(':')[1]);
  var yGyro=parseFloat(tempData[1].split(':')[1]);
  var zGyro=parseFloat(tempData[2].split(':')[1]);
  document.querySelector('#xID').textContent = xGyro;
  document.querySelector('#yID').textContent = yGyro;
  document.querySelector('#zID').textContent = zGyro;
  /*console.log("Topic:     " + message.destinationName);
  //console.log("QoS:       " + message.qos);
  //console.log("Retained:  " + message.retained);
  // Read Only, set if message might be a duplicate sent from broker
  //console.log("Duplicate: " + message.duplicate);
  //console.log(message);
}*/
  //message = new Paho.MQTT.Message("Hello World");
  //message.destinationName = "outsinhala123";
  //mqtt.send(message);
  }
  function MQTTconnect() {
  console.log("connecting to "+ host +" "+ port);
  mqtt = new Paho.MQTT.Client("ws://iot.eclipse.org/ws", "gadhala");
  //document.write("connecting to "+ host);
  var options = {
    timeout: 3,
    onSuccess: onConnect,
  };
  mqtt.connect(options); //connect
  }




  function send_message(){
		//document.getElementById("messages").innerHTML ="";
		//if (connected_flag==0){
		//out_msg="<b>Not Connected so can't send</b>"
		//console.log(out_msg);
		//document.getElementById("messages").innerHTML = out_msg;
		//return false;
		//}

    //getting from txt box
		var msg =thisIsRssi.toString();

		var topic = "gadhala";
		message = new Paho.MQTT.Message(msg);
		mqtt.send(message);
		return false;
	}


//this is where start scan happens
noble.startScanning([], true)

console.log('Running on local:9000');

/*
</body>


</html>
*/