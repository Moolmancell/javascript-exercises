const repeatString = function(word, noOfTimes) {
    let result = '';
    if (noOfTimes < 0){
        return "ERROR"
    }
    for (let i = 1; i <= noOfTimes; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
