var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function sendLB(params){
    
    var light = new Bulb(params.ip, params.port);

    return new Promise(function(resolve, reject){

	if(params.on_off === 1){	
		gladys.deviceType.exec({
    		devicetype: params.id,
		value: params.on_off
		})
		.then((result) => {

		var option = {'smartlife.iot.smartbulb.lightingservice': {'transition_light_state': {'on_off': 0 || params.on_off}}};

			return light.send(option)
			.then(status => {

				var option = {
					'smartlife.iot.smartbulb.lightingservice': {
					'transition_light_state': {
					'on_off': 0 || params.on_off,
					'hue': 0 || params.hue,
					'saturation': 0 || params.saturation,
					'color_temp': 0 || params.color_temp,
					'brightness': 0 || params.brightness,
					'transition_period': 0 || params.transition_period
						}
					}
				};

				return light.send(option)
				.then(status => {
					return Promise.resolve();
				})
				.catch(err => {
					return reject(err);			
				});
		
				//return Promise.resolve();
			})
			.catch(err => {
				return reject(err);			
			});
		
		})
		.catch((err) => {
				return reject(err);			
			});
	};
	

	if(params.on_off === 0){
		gladys.deviceType.exec({
    		devicetype: params.id,
		value: params.on_off
		})
		.then(result => {
			return Promise.resolve();
		})
		.catch(err => {
			return reject(err);			
		});
		
	};
	
	});
			  
};