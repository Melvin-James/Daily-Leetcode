/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = new Map();
    for(let i=0;i<s.length;i++){
        freq.set(s[i],(freq.get(s[i])||0)+1);
    }
    for(let i=0;i<s.length;i++){
        if(freq.get(s[i])===1) return i;
    }
    return -1;
};