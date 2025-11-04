/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let newNums = nums.map((num)=>num*num);
    newNums.sort((a,b)=>a-b);
    return newNums;
};