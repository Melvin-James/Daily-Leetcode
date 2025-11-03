/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    let n = nums.length;
    let leftProduct = 1;
    for(let i=0;i<n;i++){
        answer[i] = leftProduct;
        leftProduct = leftProduct * nums[i];
    }
    let rightProduct = 1;
    for(let i=n-1;i>=0;i--){
        answer[i] = answer[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }
    return answer;
};