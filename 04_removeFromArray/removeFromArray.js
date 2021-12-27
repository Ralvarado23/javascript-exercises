const removeFromArray = function(inputArray) {

    for (var i=0; i < arguments.length; i++) {
        let removeIndex = inputArray.indexOf(arguments[i]);

        if(removeIndex > -1){
            inputArray.splice(removeIndex, 1);
        }
    }
    
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
