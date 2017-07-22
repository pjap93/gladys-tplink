var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function exec(params){
    var d = new Date();
    var device = params.deviceType.identifier.split(":");
    var light = new Bulb(device[0], device[1]);
    console.log(params);
    if(params.deviceType.type !== 'binary'){
        return Promise.reject(new Error('Type not handled yet'));
    }
    
    return new Promise(function(resolve, reject){

        return light.set(params.state.value)
		.then(status => {
    			console.log(status);
			console.log(params.state.value);
			return resolve(params.state.value);
  			})
  		.catch(err => console.error(err));
	
    });  
};
