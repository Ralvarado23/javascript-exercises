const repeatString = function(inputText, repetitions) {
	let repeatedText = "";

	if(repetitions < 0){
		return "ERROR";
	}

	for (let i = 0; i<repetitions; i++){
		repeatedText += inputText;
	}
	return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
