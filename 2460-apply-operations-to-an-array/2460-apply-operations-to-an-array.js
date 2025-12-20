/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }
    }
    let pointer = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[pointer]=nums[i];
            pointer++;
        }
    }
    for(let i=pointer;i<nums.length;i++){
        nums[i] = 0;
    }
    return nums;
};