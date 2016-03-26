// FILE SERVER
var port = process.argv[2];
var file_name = process.argv[3];
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	var file = fs.createReadStream(file_name);
	file.on('open',function(){
		file.pipe(response);
		response.end();
	});





});
server.listen(port);
