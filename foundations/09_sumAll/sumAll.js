const sumAll = function(min, max) {
    if (Number.isInteger(min) && Number.isInteger(max) && min>=0 && max>=0){
        let sum = 0;

        for(i=Math.min(min, max); i<=Math.max(min, max); i++){
            sum+=i;
        }

        return sum
    }

    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;