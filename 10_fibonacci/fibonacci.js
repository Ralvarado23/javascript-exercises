const fibonacci = function(limit) {

    if(limit<0) return "OOPS"

    fibonacciSerie = [1, 1];

    for(let i=1; i<limit; i++){
        fibonacciSerie.push(fibonacciSerie[i]+fibonacciSerie[i-1]);
    }

    return fibonacciSerie[limit-1];
};

// Do not edit below this line
module.exports = fibonacci;
