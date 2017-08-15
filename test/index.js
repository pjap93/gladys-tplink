var config = require('./config.js');
var fs = require('fs');

describe('JSON', function() {

	config.types.forEach(function(type){
		
		config.supportedLanguages.forEach(function(files){

			var file = './' + type + '/' + files + '.js';
			
			it('Should validate JSON file : ' + file, function(){

				var content = fs.readFileSync(file, 'utf8');
				JSON.parse(content);
			});

		});
	});
});
