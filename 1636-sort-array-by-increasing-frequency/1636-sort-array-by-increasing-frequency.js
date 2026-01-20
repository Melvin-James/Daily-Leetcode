/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freq={};
    for(let num of nums){
        freq[num] = (freq[num]||0)+1;
    }

    nums.sort((a,b)=>{
        if(freq[a]!==freq[b]){
            return freq[a] - freq[b];
        }
        return b - a;
    })
    return nums;
};