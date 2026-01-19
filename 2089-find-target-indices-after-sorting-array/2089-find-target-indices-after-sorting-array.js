/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sorted = nums.sort((a,b)=>a-b);
    let result = [];
    for(let i=0;i<sorted.length;i++){
        if(sorted[i]===target){
            result.push(i);
        }
    }
    return result;
};