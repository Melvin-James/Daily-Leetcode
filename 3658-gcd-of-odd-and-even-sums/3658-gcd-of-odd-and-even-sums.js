/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    let sumOdd = n*n;
    let sumEven = n*(n+1);
    return Math.abs(sumOdd-sumEven);
};