/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {};
    for(let num of nums){
        freq[num]=(freq[num]||0)+1;
    }
    for(let key of nums){
        if(freq[key]===1) return Number(key);
    }
};