const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  //var beacon = advertisement["2d3f143bfe1a4628aabefc77393e87cc"];
  //beacon.rssi = advertisement["rssi"];
  //console.log(JSON.stringify(beacon, null, "  "));
  //console.log(beacon.rssi);
};

// Start scanning
scanner.startScan().then(() => {
  //console.log('Started to scan......')  ;
}).catch((error) => {
  //console.log('error occurred');
  //console.error(error);
});