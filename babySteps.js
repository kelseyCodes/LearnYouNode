
var input = process.argv;


var result = 0;
	for (var i = 2; i < input.length; i++) {
		result += (input[i]-0);
	};
	
console.log(result);
