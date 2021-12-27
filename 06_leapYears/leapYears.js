const leapYears = function(inputYear) {
    
    let leap = false;

    if(inputYear%4==0 && (inputYear%100!=0 || inputYear%400==0)){
        leap = true;
    }

    return leap;
};

// Do not edit below this line
module.exports = leapYears;
