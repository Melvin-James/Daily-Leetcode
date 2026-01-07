/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let curDiff=0;
    let maxDiff=0;
    for(let i=0;i<nums.length;i++){
        curDiff = Math.abs(nums[i]-nums[i+1]);
        if(curDiff > maxDiff){
            maxDiff = curDiff;
        }
    }
    let ec = Math.abs(nums[nums.length-1]-nums[0]);
    return Math.max(maxDiff,ec);
};