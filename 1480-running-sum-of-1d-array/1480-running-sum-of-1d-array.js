/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = [];
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        runningSum[i] = sum+nums[i];
        sum = runningSum[i];
    }
    return runningSum;
};