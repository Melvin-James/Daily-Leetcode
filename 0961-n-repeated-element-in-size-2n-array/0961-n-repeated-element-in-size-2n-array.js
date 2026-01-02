/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = (nums.length)/2;
    const freq = {};
    for(let i=0;i<nums.length;i++){
        freq[nums[i]] = (freq[nums[i]] || 0)+1;
    }
    for(let key in freq){
        if(freq[key] === n){
            return Number(key);
        }
    }
};