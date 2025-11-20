/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let length = nums.length;
    let freq = {};
    for(let num of nums){
        freq[num] = (freq[num]||0)+1;
    }
    for(let key in freq ){
        if(freq[key]!==1){
            nums.push(Number(key))
        }
    }
    return nums.slice(length);
};