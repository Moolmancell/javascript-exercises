const removeFromArray = function(array, ...values) {
    let y = [];
    outer: for (const item of array) {
        for (const value of values){
            if (item === value) {
                continue outer;
            }
        }
        y.push(item);
    }
    return y;
};

// Do not edit below this line
module.exports = removeFromArray;


