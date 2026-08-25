/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let set = new Set(nums);
    for(let i=k;i<k*200;i+=k){
        if(!set.has(i)){
            return i;
        }
    }
};