const repeatString = function(word, num) {
    let counter = 0;
    let newStr='';
    if (num < 0){
        return 'ERROR'
    }
    while (counter < num){
        newStr += word;
        counter++;
    }
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
