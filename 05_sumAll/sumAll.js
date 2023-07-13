const sumAll = function(from, to) {
    if (!Number.isInteger(from)||!Number.isInteger(to)) return "ERROR";
    let sum = 0;
    if (from > to){
        const x = from;
        from = to;
        to = x;
    } 
    for (; from <= to; from++)  {
        sum+=from;
    }
    
    if (sum < 0){
        return "ERROR"
    } else {
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
