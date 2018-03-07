const path = require('path')

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname+'/../templates/reservations.html'));
	});

	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname+'/../templates/tables.html'));
	});

}