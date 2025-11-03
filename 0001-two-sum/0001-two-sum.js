/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ht = new Map();
    for(let i=0;i<nums.length;i++){
        let currentNum = nums[i];
        let compliment = target - currentNum;
        if(ht.has(compliment)){
            return [ht.get(compliment),i];
        }else{
            ht.set(currentNum,i);
        }
    }
    return [];
};