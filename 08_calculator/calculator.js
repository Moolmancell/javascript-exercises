const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(set) {
	return set.reduce((number, item) => number + item, 0)
};

const multiply = function(...set) {
  return set.reduce((number, item) => number * item)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(set) {
  let total = 1;
	for (;set != 0;set--){
    total*=set
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
