/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let currentZeroStreak=0;
    let result = 0;
    for(let num of nums){
        if(num===0){
            currentZeroStreak+=1;
            result+=currentZeroStreak
        }else{
            currentZeroStreak = 0;
        }
    }
    return result;
};