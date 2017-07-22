var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function() {

var client = Bulb.scan();

client.on('light', function(device) {

if(device._sysinfo.model.indexOf('LB')>-1){
    var newDevice = {
      device: {
        name: device.name,
        protocol: 'wifi',
        service: 'tplink',
        identifier: device.ip + ':' + device.port,
      },
      types: [
        {
          type:'binary',
          sensor: false,
          min: 0,
          max: 1,
	  value: 0
        }
      ]
     };
     gladys.device.create(newDevice);
};

  });

};
