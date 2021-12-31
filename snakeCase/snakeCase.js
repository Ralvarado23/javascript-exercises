const snakeCase = function(inputString) {

    //Se eliminan los caracteres especiales y los espacios al principio y al final
    inputString = inputString.replace(/[^\w\s]|_/g, " ").trim();

    //Correción para los camel case
    if(inputString.indexOf(" ")<0){
        inputString = inputString.replace(/([A-Z])/g, " $1");
    }
    
    return inputString.toLowerCase().replace(/\s+/g, "_");
};

// Do not edit below this line
module.exports = snakeCase;
