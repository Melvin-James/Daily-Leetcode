/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = new Set();
    let pointer = 0;
    for(let i=0;i<nums.length;i++){
        if(!seen.has(nums[i])){
            nums[pointer] = nums[i];
            pointer++;
            seen.add(nums[i]);
        }
    }
    return pointer;
};