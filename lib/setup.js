var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function() {

var client = Bulb.scan();

client.on('light', function(device) {

if(device._sysinfo.model.indexOf('LB110')>-1){
    var newDevice = {
      device: {
        name: device.name,
        protocol: 'wifi',
        service: 'tplink',
        identifier: device.ip + ':' + device.port,
      },
      types: [
        {
	  identifier:'on_off',
          type:'binary',
          sensor: false,
          min: 0,
          max: 1,
	  value: 0
        },
        {
	  identifier:'brightness',
          type:'multilevel',
	  unit:'%',
          sensor: false,
          min: 1,
          max: 100,
	  value: 1
        },
        {
	  identifier:'conso',
          type:'binary',
	  unit:'KhW',
          sensor: true,
          min: 0,
          max: 100000,
	  value: 0
        }

      ]
     };
     gladys.device.create(newDevice);
};
	
if(device._sysinfo.model.indexOf('LB120')>-1){
    var newDevice = {
      device: {
        name: device.name,
        protocol: 'wifi',
        service: 'tplink',
        identifier: device.ip + ':' + device.port,
      },
      types: [
        {
	  identifier:'on_off',
          type:'binary',
          sensor: false,
          min: 0,
          max: 1,
	  value: 0
        },
        {
	  identifier:'brightness',
          type:'multilevel',
	  unit:'%',
          sensor: false,
          min: 1,
          max: 100,
	  value: 1
        },
        {
	  identifier:'color_temp',
          type:'multilevel',
	  unit:'',
          sensor: false,
          min: 2700,
          max: 6500,
	  value: 2700
        },
        {
	  identifier:'conso',
          type:'binary',
	  unit:'KhW',
          sensor: true,
          min: 0,
          max: 100000,
	  value: 0
        }

      ]
     };
     gladys.device.create(newDevice);
};

if(device._sysinfo.model.indexOf('LB130')>-1){
    var newDevice = {
      device: {
        name: device.name,
        protocol: 'wifi',
        service: 'tplink',
        identifier: device.ip + ':' + device.port,
      },
      types: [
        {
	  identifier:'on_off',
          type:'binary',
          sensor: false,
          min: 0,
          max: 1,
	  value: 0
        },
        {
	  identifier:'brightness',
          type:'multilevel',
	  unit:'%',
          sensor: false,
          min: 1,
          max: 100,
	  value: 1
        },
        {
	  identifier:'color_temp',
          type:'multilevel',
	  unit:'',
          sensor: false,
          min: 2700,
          max: 6500,
	  value: 2700
        },
        {
	  identifier:'hue',
          type:'multilevel',
	  unit:'',
          sensor: false,
          min: 0,
          max: 100,
	  value: 0
        },
        {
	  identifier:'saturation',
          type:'multilevel',
	  unit:'',
          sensor: false,
          min: 0,
          max: 100,
	  value: 0
        },
        {
	  identifier:'conso',
          type:'binary',
	  unit:'KhW',
          sensor: true,
          min: 0,
          max: 100000,
	  value: 0
        }

      ]
     };
     gladys.device.create(newDevice);
};	
	
  });

};

