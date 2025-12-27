const leapYears = function(year) {
    if(year%4==0){
        console.log(year + "is divisible by 4");
        if(year%100 == 0 && year%400 != 0){
            console.log(year + "is divisible by 100 but not 400");
            return false
        }else{
            console.log("year is divisible by 4!")
            return true
        }
    }
    return false

};

// Do not edit below this line
module.exports = leapYears;