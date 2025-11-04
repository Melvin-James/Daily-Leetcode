/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<2) return nums;
    let mid = Math.floor(nums.length/2);
    let leftNums = nums.slice(0,mid);
    let rightNums = nums.slice(mid);
    return merge(sortArray(leftNums),sortArray(rightNums));
};
function merge(leftNums,rightNums){
    let sortedNums = [];
    while(leftNums.length && rightNums.length){
        if(leftNums[0]<=rightNums[0]){
            sortedNums.push(leftNums.shift());
        }else{
            sortedNums.push(rightNums.shift());
        }
    }
    return [...sortedNums,...leftNums,...rightNums];
}