var fs = require('fs');
module.exports = function(dirname,ext,callback){
var matchedList = [];
fs.readdir(dirname,function(err,list){
	if(err){
		callback(err,[]);
		return null;
	}
	for(var i=0;i<list.length;i++){
		if(list[i].split('.')[1] == ext)
			matchedList.push(list[i]);
	}
	var filteredList = matchedList;
	callback(err,filteredList);
});
};
