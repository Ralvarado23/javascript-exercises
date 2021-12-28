const palindromes = function (inputWord) {
    inputWord = inputWord.toLowerCase().replace(/[^A-Za-z]/g, "");
    let reversedWord = inputWord.split("").reverse().join("");

    return inputWord == reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
