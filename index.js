module.exports = function(sails) {
    
    var setup = require('./lib/setup.js');
    var exec = require('./lib/exec.js');
    var sendLB = require('./lib/sendLB.js');
    var sendHS = require('./lib/sendHS.js');
    var init = require('./lib/init.js');
    var getConsumption = require('./lib/getConsumption.js');

    gladys.on('ready', function(){
        init();
    });

    return {
        setup: setup,
	exec: exec,
	sendLB: sendLB,
	sendHS: sendHS,
        getConsumption: getConsumption
        };
};
