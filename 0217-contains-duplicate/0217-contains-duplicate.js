/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let freq = {};
    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
    }
    for(let key in freq){
        if(freq[key]!==1){
            return true;
        }
    }
    return false;
};