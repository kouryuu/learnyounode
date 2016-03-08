// FILTERED LS
var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
var matchedList = [];
fs.readdir(dir,function(err,list){
	for(var i=0;i<list.length;i++){
		if(list[i].split('.')[1] == ext)
			matchedList.push(list[i]);
	}
	console.log(matchedList.join('\n'));
});
	
