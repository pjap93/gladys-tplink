var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function exec(params){
    var d = new Date();
    var device = params.deviceType.identifier.split(":");
    var light = new Bulb(device[0], device[1]);
    console.log(params);
    //if(params.deviceType.type !== 'binary' && params.deviceType.type !== 'binary' ){
    //    return Promise.reject(new Error('Type not handled yet'));
    //}

    light.info()
	.then(info => {console.log(info)})
    

    if(params.deviceType.deviceTypeIdentifier === 'on_off') {
    	return new Promise(function(resolve, reject){

        return light.set(params.state.value)
		.then(status => {
    			console.log(status);
			console.log(params.state.value);
			return resolve(params.state.value);
  			})
  		.catch(err => console.error(err));
	
    	});
    }

    if(params.deviceType.deviceTypeIdentifier === 'brightness') {
    	return new Promise(function(resolve, reject){

	var option = {
  		'smartlife.iot.smartbulb.lightingservice': {
    		'transition_light_state': {
      		'brightness': params.state.value,
      		'transition_period': 0
    		}
		}
	};

        return light.send(option)
		.then(status => {
    			console.log(status);
			console.log(params.state.value);
			return resolve(params.state.value);
  			})
  		.catch(err => console.error(err));
	
    	});
    }

    if(params.deviceType.deviceTypeIdentifier === 'color_temp') {
    	return new Promise(function(resolve, reject){

	var option = {
  		'smartlife.iot.smartbulb.lightingservice': {
    		'transition_light_state': {
      		'color_temp': params.state.value,
      		'transition_period': 0
    		}
		}
	};

        return light.send(option)
		.then(status => {
    			console.log(status);
			console.log(params.state.value);
			return resolve(params.state.value);
  			})
  		.catch(err => console.error(err));
	
    	});
    }

  
};
