const path = require('path');

var tables = require('../data/tables.js');
var waitList = require('../data/waitList.js');

module.exports  = function(app){
	app.get('/api/tables', function(req, res){

		res.json([tables,waitList]);
	});

	app.post('/api/tables', function(req, res){	
		if(tableData.length < 5 ){
			tables.push(req.body);
			res.json(true); // KEY LINE
		}

		// Or false if they don't have a table
		else{
			waitList.push(req.body);
			res.json(false); // KEY LINE
		}
	});

}
