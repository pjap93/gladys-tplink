var Bulb = require('tplink-lightbulb');

//https://github.com/plasticrake/hs100-api
var Hs100Api = require('hs100-api');

var Promise = require('bluebird');

module.exports = function exec(params){
    console.log(params);
/*
    RowDataPacket {
0|gladys   |      id: 160,
0|gladys   |      type: 'binary',
0|gladys   |      unit: null,
0|gladys   |      min: 0,
0|gladys   |      max: 1,
0|gladys   |      identifier: '192.168.0.25:9999:HS110',
0|gladys   |      device: 95,
0|gladys   |      service: 'tplink',
0|gladys   |      protocol: 'wifi',
0|gladys   |      deviceTypeIdentifier: 'state',
0|gladys   |      roomName: 'Salle à Manger' },
0|gladys   |   state: { devicetype: '160', value: 1 } }
*/
    var d = new Date();
    var device = params.deviceType.identifier.split(":");

    if(device[2].indexOf('LB1')>-1){
        
        var light = new Bulb(device[0], device[1]);

     	return new Promise(function(resolve, reject){
	
	var temp_device = params.deviceType.deviceTypeIdentifier;
	var option = {
  		'smartlife.iot.smartbulb.lightingservice': {
    		'transition_light_state': {
      		'transition_period': 0
    		}
		}
	};
	option['smartlife.iot.smartbulb.lightingservice']['transition_light_state'][params.deviceType.deviceTypeIdentifier]=params.state.value;

        return light.send(option)
		.then(status => {
			return resolve(params.state.value);
  			})
  		.catch(err => {
			console.error(err);
			return reject(err);
		});
	
    	

     });
   };

    if(device[2].indexOf('HS1')>-1){
        var client = new Hs100Api.Client();

     	return new Promise(function(resolve, reject){
	
	var temp_device = params.deviceType.deviceTypeIdentifier;

const plug = client.getDevice({host: device[0],port: device[1]}).then((device)=>{
  device.getSysInfo().then(console.log);
  device.getConsumption().then(console.log);

  device.setPowerState(params.state.value)
		.then(status => {
                        device.getConsumption().then(console.log);
			return resolve(params.state.value);
  			})
  		.catch(err => {
			console.error(err);
			return reject(err);
		});

});

/*
	var option = {"system":{"set_relay_state":{"state": params.state.value}}};

        return light.send(option)
		.then(status => {
			console.log(light);
			console.log(status);
			return resolve(params.state.value);
  			})
  		.catch(err => {
			console.error(err);
			return reject(err);
		});
*/
     });

   };
  
};
