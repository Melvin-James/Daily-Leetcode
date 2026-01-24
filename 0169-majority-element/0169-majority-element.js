/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {};
    let maj = Math.floor(nums.length/2);
    for(let num of nums){
        freq[num] = (freq[num]||0)+1;
    }

    console.log(freq);

    for(let key in freq){
        if(freq[key]>maj){
            return Number(key);
        }
    }
};