/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let binary = n.toString(2).padStart(32,'0')
    let reversed = binary.split('').reverse().join('');
    let result = parseInt(reversed,2);
    return result;
};