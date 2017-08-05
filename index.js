module.exports = function(sails) {
    
    var setup = require('./lib/setup.js');
    var exec = require('./lib/exec.js');
    var send = require('./lib/send.js');
	
    return {
        setup: setup,
	exec: exec,
	send: send
        };
};
