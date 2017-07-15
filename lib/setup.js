var Bulb = require('tplink-lightbulb');
module.exports = function(){
  var client = WeMo.Search();
  
  client.on('found', function(device) {
  sails.log.debug(device);

  });

  return Promise.resolve();
};
