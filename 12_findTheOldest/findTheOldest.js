const findTheOldest = function(inputArray) {
    return inputArray.map(function(person){
        if(person.yearOfDeath == null){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })
    .reduce(function(previousPerson, currentPerson, index){
        if(index>0){
            if(previousPerson.yearOfDeath-previousPerson.yearOfBirth>currentPerson.yearOfDeath-currentPerson.yearOfBirth){
                return previousPerson;
            } else {
                return currentPerson;
            }
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
