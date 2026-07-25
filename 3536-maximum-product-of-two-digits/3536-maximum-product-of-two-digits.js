/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    n = String(n).split('');
    let sort = n.sort((a,b)=>b-a);
    let n1 = sort[0];
    let n2 = sort[1];
    return n1 * n2;
};