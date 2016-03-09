// HTTP COLLECT

var http = require('http');
var url = process.argv[2];
var printLines = (function(data_string){
	console.log(data_string.length+'\n'+data_string);	

	});
http.get(url,function(response){
	response.setEncoding('utf-8');
	var data_string = "";
	response.on("data",function(data){
		data_string += data;
	});
	response.on("end",function(){printLines(data_string)});
});

