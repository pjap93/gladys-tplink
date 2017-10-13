
module.exports = function(){
	
	// TPLINK_SCRUT_CONSO à définir par l'utilisateur en minutes
	gladys.param.setValue({name: 'TPLINK_SCRUT_CONSO', value: '1'});

	sails.log.info('tplink : Module installed');
	return Promise.resolve();
};