/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let currentStreak = 1;
    let maxStreak = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i]>nums[i-1]){
            currentStreak+=1;
        }else{
            currentStreak = 1;
        }
        if(currentStreak > maxStreak){
            maxStreak = currentStreak;
        }
    }
    return maxStreak;
};