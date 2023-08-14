const palindromes = function(sentence) {
    const rawWord = sentence.replace(/[^A-Z0-9]+/ig, "").toLowerCase();
    return rawWord.split("").reduceRight((word, current) => word + current, "") === rawWord
};

// Do not edit below this line
module.exports = palindromes;
