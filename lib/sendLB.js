var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');
var listcolor = require('./list_color.js');
var queries = require('./queries.js');

module.exports = function sendLB(params){

    return gladys.utils.sql(queries.getByIdTPLINK, [params.id])
    .then((tplinkdevice) => {

            var device = tplinkdevice[0].identifier.split(":");
	    var light = new Bulb(device[0], device[1]);

		if (typeof(params.color) != 'undefined') 
		{
			 params.hue = listcolor[params.color].h;
			 params.saturation = listcolor[params.color].s;
			 params.color_temp = listcolor[params.color].c;
		}

		if(params.on_off === 1){	

			var option = {'smartlife.iot.smartbulb.lightingservice': {'transition_light_state': {'on_off': 0 || params.on_off}}};

				return light.send(option)
				.then(status => {

                                        if(typeof(status) === 'undefined') return Promise.reject(new Error('Incorrect value'));
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

                                                return gladys.utils.sql(queries.getTypeByIdTPLINK, [params.id])
                                                .then((tplinkdevicetype) => {
                                                        if(typeof(tplinkdevicetype) === 'undefined') return Promise.reject(new Error('Incorrect value'));
                                                        tplinkdevicetype.forEach((devtype) => {

		                                              if (typeof(params[devtype.identifier]) != 'undefined') 
		                                              {
			                                             gladys.deviceState.create({devicetype: devtype.id, value: params[devtype.identifier]});
		                                              }
                                                        });                                                
                                                });
					
						return Promise.resolve(status);
					})
					.catch(err => {
                                                console.log(err);
						return Promise.reject(err);			
					});

				})
				.catch(err => { 
                                       console.error(err);
                                       return Promise.reject(err);
                                });
							
		};

		if(params.on_off === 0){
		
			var option = {
					'smartlife.iot.smartbulb.lightingservice': {
					'transition_light_state': {
					'on_off': 1,
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

				var option = {'smartlife.iot.smartbulb.lightingservice': {'transition_light_state': {'on_off': 0 || params.on_off}}};

					return light.send(option)
					.then(status => {

                                                return gladys.utils.sql(queries.getTypeByIdTPLINK, [params.id])
                                                .then((tplinkdevicetype) => {
                                                        if(typeof(tplinkdevicetype) === 'undefined') return Promise.reject(new Error('Incorrect value'));
                                                        tplinkdevicetype.forEach((devtype) => {

		                                              if (typeof(params[devtype.identifier]) != 'undefined') 
		                                              {
			                                             gladys.deviceState.create({devicetype: devtype.id, value: params[devtype.identifier]});
		                                              }
                                                        });                                                
                                                });



						return Promise.resolve(status);
					})
					.catch(err => {
						return Promise.reject(err);			
					});
			
				})
				.catch(err => {
					return Promise.reject(err);			
				});		
		};
		
	})
    .catch((err) => {
        sails.log.warn(`ERROR module TPLINK ${err}`);
	return Promise.reject(err);
    });	
};