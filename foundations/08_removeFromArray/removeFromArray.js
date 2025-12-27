const removeFromArray = function(array, ...vals) {
    return array.filter(item => !vals.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
