// JUGGLING ASYNC 

var http = require('http');
var server1 = process.argv[2];
var server2 = process.argv[3];
var server3 = process.argv[4];
var responses = {
	server1_data:null,
	server2_data:null,
	server3_data:null,
	no_responses:0,
	addResponse:function(data_string,server){
		this[server+'_data'] = data_string;
		this['no_responses']++;
		if(this.no_responses == 3)
			console.log(this.server1_data+'\n'+
				this.server2_data+'\n'+
				this.server3_data);
		}
	};
http.get(server1,function(response){
	response.setEncoding('utf-8');
	var data_string = '';
	response.on('data',function(data){
		data_string += data;
	});
	response.on('end',function(){responses.addResponse(data_string,'server1')});
});
http.get(server2,function(response){
	response.setEncoding('utf-8');
	var data_string = '';
	response.on('data',function(data){
		data_string += data;
	});
	response.on('end',function(){responses.addResponse(data_string,'server2')});
});
http.get(server3,function(response){
	response.setEncoding('utf-8');
	var data_string = '';
	response.on('data',function(data){
		data_string += data;
	});
	response.on('end',function(){responses.addResponse(data_string,'server3')});
});

