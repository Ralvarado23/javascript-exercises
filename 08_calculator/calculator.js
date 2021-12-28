const add = function() {
  total = 0;
  
  for (let i=0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
};

const subtract = function() {
  return arguments[0]-arguments[1];
};

const sum = function(inputArray) {
  total = 0;
	
  for (let i=0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  
  return total;
};

const multiply = function(inputArray) {

if(inputArray.length == 0){
  return 0;
}

total = 1;

for (let i=0; i < inputArray.length; i++) {
  total *= inputArray[i];
}

return total;
};

const power = function() {
	return arguments[0]**arguments[1];
};

const factorial = function(inputNumber) {
  total = 1;

	for(let i = 1; i<=inputNumber; i++){
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
