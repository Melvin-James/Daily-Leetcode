/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxDiff = 0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            let diff = nums[j] - nums[i];
            maxDiff = diff > maxDiff ? diff : maxDiff; 
        }
    }
    return maxDiff ===0 ? -1 : maxDiff;
};