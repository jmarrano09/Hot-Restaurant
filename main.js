const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);;

app.use('/assets',express.static(path.join(__dirname, '/assets')));

//static html routes
require('./helpers/routes/html_routes.js')(app);
//api routes
require('./helpers/routes/api_routes.js')(app);

http.listen(process.env.PORT  || 8080, function(){
	console.log('listening on :8080');
});


