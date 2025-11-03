/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const ht = {};
    for(let i=0;i<nums.length;i++){
        ht[nums[i]]=(ht[nums[i]]||0)+1;
    }
    for(let num in ht){
        if(ht[num]>1){
            return true;
        }
    }
    return false;
};