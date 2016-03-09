// FILTERED LS
var mymodule = require('./module');
var dir = process.argv[2];
var ext = process.argv[3];
mymodule(dir,ext,function(err,list){
if(err){
	console.error('There was an error:', err);
}else{
	console.log(list.join('\n'));
}
});
