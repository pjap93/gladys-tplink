var Bulb = require('tplink-lightbulb');
var Promise = require('bluebird');

module.exports = function sendLB(params){
    
	var light = new Bulb(params.ip, params.port);

	return new Promise(function(resolve, reject){


		gladys.deviceType.exec({
  		devicetype: params.id,
		value: params.on_off})
		.then((result) => {
			return Promise.resolve();
		})
		.catch(err => {
			return reject(err);			
		});
	});
			  
};