module.exports = function(sails) {
    
    var setup = require('./lib/setup.js');
    var exec = require('./lib/exec.js');
    var sendLB = require('./lib/sendLB.js');

    return {
        setup: setup,
	exec: exec,
	sendLB: sendLB
        };
};
