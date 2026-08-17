/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length < k) return null;

    let windowSum = 0;
    let maxAverage = 0;

    for(let i=0;i<k;i++){
        windowSum+=nums[i];
    }

    let windowAverage = windowSum/k;
    maxAverage = windowAverage;

    for(let i=k;i<nums.length;i++){
        windowSum = (windowSum + nums[i]) - nums[i-k];

        windowAverage = windowSum / k;

        maxAverage = Math.max(windowAverage,maxAverage);
    }

    return maxAverage;
};