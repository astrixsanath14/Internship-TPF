const Noble = require("noble");
const BeaconScanner = require("node-beacon-scanner");

var scanner = new BeaconScanner();

// Set an Event handler for becons
scanner.onadvertisement = (advertisement) => {
  var beacon = advertisement["iBeacon"];
  //console.log(beacon);
  try {
      beacon.rssi = advertisement["rssi"];
      console.log(JSON.stringify(advertisement, null, "  "));
      if (err){
        throw (err);
      }
      /* continue as normal */
     }
      catch (ex) {
      //console.log('THERE WAS AN ERROR');
      }
      //advertisement["rssi"];
};
// Start scanning
scanner.startScan().then(() => {
  console.log('Started to scan......')  ;
}).catch((error) => {
  console.error(error);
});

