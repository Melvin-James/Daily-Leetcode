/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let swapped ;
    do{
        swapped=false;
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]>nums[i+1]){
                [nums[i],nums[i+1]]=[nums[i+1],nums[i]];
                swapped = true;
            }
        }
    }while(swapped)
    return nums;
};