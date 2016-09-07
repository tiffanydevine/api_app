var arrays = [[1, 2, 99], [4, 500], [6]];

var allArrays = arrays.reduce(function(all, anArray){
	return all.concat(anArray); 
},[]); 

console.log(allArrays); 