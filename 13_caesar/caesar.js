const caesar = function(inputText, shiftPositions) {
    let cypherText = "";

    //Function para mantener el shift sobre el alfabeto de mayus/minus
    const adjustShiftedUnicode = function(inputUnicode){
        return shiftPositions>0? inputUnicode-26 : inputUnicode+26;
    }

    for(let i = 0; i<inputText.length; i++){

        let tempUnicode = inputText.charCodeAt(i);
        let tempShiftedUnicode = tempUnicode + shiftPositions

        //El valor inicial está en a-z y no se va fuera de rango
        if(tempUnicode>=97 && tempUnicode<=122){
            while(tempShiftedUnicode<97 || tempShiftedUnicode>122){
                tempShiftedUnicode = adjustShiftedUnicode(tempShiftedUnicode);
            }
            cypherText = cypherText.concat(String.fromCharCode(tempShiftedUnicode));
        //El valor inicial está en A-Z y no se va fuera de rango
        } else if(tempUnicode>=65 && tempUnicode<=90){
            while(tempShiftedUnicode<65 || tempShiftedUnicode>90){
                tempShiftedUnicode = adjustShiftedUnicode(tempShiftedUnicode);
            }
            cypherText = cypherText.concat(String.fromCharCode(tempShiftedUnicode));
        //El valor inicial no es alfabético
        } else {
          cypherText = cypherText.concat(inputText.charAt(i));
        }
    }

    return cypherText;
};

// Do not edit below this line
module.exports = caesar;