const reverseString = function(word) {
    let newStr = '';
    for (i=word.length-1; i>=0; i--){
        newStr += word[i];
    }
    return newStr

};

// Do not edit below this line
module.exports = reverseString;
