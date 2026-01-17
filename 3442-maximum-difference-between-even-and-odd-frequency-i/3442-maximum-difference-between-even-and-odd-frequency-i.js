/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let freq = {};
    for(let ch of s ){
        freq[ch] = (freq[ch] ||  0)+1;
    }
    let maxOdd = -Infinity;
    let minEven = Infinity;
    for(let ch in  freq){
        if(freq[ch]%2===0){
            minEven = Math.min(minEven,freq[ch]);
        }else{
            maxOdd = Math.max(maxOdd,freq[ch]);
        }
    }
    if(maxOdd === -Infinity || minEven === Infinity) return -1;
    return maxOdd - minEven;
};