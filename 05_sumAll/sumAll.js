const sumAll = function(num1, num2) {

    if((typeof(num1) == 'number' && num1>=0) && (typeof(num2) == 'number' && num2>=0)){
        let total = 0;

        if(num1<num2){
            for(let i = num1; i<=num2; i++){
                total = total + i;
            }
        } else {
            for(let i = num2; i<=num1; i++){
                total = total + i;
            }
        }

        return total;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
