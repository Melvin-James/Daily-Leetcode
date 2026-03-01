/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let unique = new Set(nums);
    for(let i=1;i<=nums.length+1;i++){
        if(i>0 && !unique.has(i)){
            return i;
        }
    }
};