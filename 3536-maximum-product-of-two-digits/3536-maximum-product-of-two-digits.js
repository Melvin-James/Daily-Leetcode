/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let max = 0;
    let sum = 0;
    let s = n.toString();
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1;j<s.length;j++){
            sum = Number(s[i])*Number(s[j]);
            max = Math.max(sum,max);
        }
    }
    return max;
};