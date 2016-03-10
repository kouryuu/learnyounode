// TIME SERVER
var port = process.argv[2];
var net = require('net');
var server = net.createServer(function(socket){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() < 10?"0"+(date.getMonth()+1):date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes() < 10?"0"+date.getMinutes():date.getMinutes();
	var date_string = year+"-"+month+"-"+day+" "+hour+":"+min+'\n';
	socket.write(date_string);
	socket.end();
});
server.listen(port);


