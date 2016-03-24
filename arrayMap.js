function doubleAll(numbers){

	var double = numbers.map(function(num){
		return num * 2;
	})

	return double;
};

module.exports = doubleAll
