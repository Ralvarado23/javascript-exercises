const ftoc = function(farenheitTemp) {
  return Math.round((farenheitTemp-32)*(5/9)*10)/10;
};

const ctof = function(celsiusTemp) {
  return Math.round((celsiusTemp*(9/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
