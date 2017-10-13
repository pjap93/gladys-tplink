var Promise = require('bluebird');

module.exports = function() {
 
	// TPLINK_SCRUT_CONSO à définir par l'utilisateur en minutes
	gladys.param.delete({name: 'TPLINK_SCRUT_CONSO'});
	
  sails.log.info('tplink : Module uninstalled');
  return Promise.resolve();

};
