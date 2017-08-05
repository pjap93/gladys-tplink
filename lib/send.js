var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function send(params){
    
    var d = new Date();
    //var device = params.deviceType.identifier.split(":");
    var light = new Bulb(params.ip, params.port);
	
	
	
    return new Promise(function(resolve, reject){

	if(params.on_off === 1){	
		var option = {'smartlife.iot.smartbulb.lightingservice': {'transition_light_state': {'on_off': 0 || params.on_off}}};
		
		console.log('prem');
			return light.send(option)
			.then(status => {
				console.log(status);
				//console.log(params.state.value);

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

				console.log('sec');
				return light.send(option)
				.then(status => {
					console.log(status);
					//console.log(params.state.value);
					return Promise.resolve();
				})
				.catch(err => {
					console.error(err);
					return reject(err);			
				});
		
				//return Promise.resolve();
			})
			.catch(err => {
				console.error(err);
				return reject(err);			
			});
	};
	

	if(params.on_off === 0){
		var option = {'smartlife.iot.smartbulb.lightingservice': {'transition_light_state': {'on_off':0 || params.on_off,'transition_period': 0}}};

		console.log('ter');
			return light.send(option)
			.then(status => {
				console.log(status);
				//console.log(params.state.value);
				return Promise.resolve();
				})
			.catch(err => {
				console.error(err);
				return reject(err);			
			});
		
	};
	
	});
			  
};