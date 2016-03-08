// My first Async I/O
var fs = require('fs');
var buffer = fs.readFile(process.argv[2], function(error,data){
console.log(data
	.toString()
	.split('\n')
	.length -1);
});
