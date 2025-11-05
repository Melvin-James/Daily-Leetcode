/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const ht = {};
    for(let num of nums){
        ht[num] = (ht[num] || 0)+1;
    }
    let sorted = Object.entries(ht).sort((a,b)=>b[1]-a[1]);
    let sliced = sorted.slice(0,k);
    let result = sliced.map(([num])=>Number(num));
    return result;
};