/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let left = [];
    let right = [];
    let lsum=0;
    let rsum=0;
    let diff=0;
    let count = 0;
    for(let i=1;i<nums.length;i++){
        left = nums.slice(0,i);
        right = nums.slice(i);
        lsum = left.reduce((acc,num)=>acc+num,0);
        rsum = right.reduce((acc,num)=>acc+num,0);
        diff = Math.abs(lsum-rsum);
        diff % 2 === 0 ? count++ : count
    }
    return count;
};