/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let freq = {};
    let res = [];
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1
    }
    for(let key in freq){
        if(freq[key]!==1){
            res.push(Number(key));
            break;
        }
    }
    for(let i=1;i<=nums.length;i++){
        if(!nums.includes(i)){
            res.push(i);
            break;
        }
    }
    return res;
};