var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function exec(params){
    var d = new Date();
    var device = params.deviceType.identifier.split(":");
    var light = new Bulb(device[0], device[1]);
    //console.log(params);
    //if(params.deviceType.type !== 'binary' && params.deviceType.type !== 'binary' ){
    //    return Promise.reject(new Error('Type not handled yet'));
    //}

    //light.info()
    //	.then(info => {console.log(info)})

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
    			//console.log(status);
			//console.log(params.state.value);
			return resolve(params.state.value);
  			})
  		.catch(err => {
			console.error(err);
			return reject(err);
		});
	
    	});

  
};