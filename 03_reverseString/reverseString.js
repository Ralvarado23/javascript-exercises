const reverseString = function(str) {
    let reversedString = "";

    for (let i = str.length-1; i >= 0; i--){
        reversedString = reversedString + str.charAt(i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
