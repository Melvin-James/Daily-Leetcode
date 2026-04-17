/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums,k){
    let n = nums.length;
    for(let i = Math.floor((n/2)-1);i>=0;i--){
        heapifyDown(nums,n,i);
    }
    for (let end = n - 1; end > 0; end--) {
        [nums[0], nums[end]] = [nums[end], nums[0]];
        heapifyDown(nums, end, 0);
    }
    return nums[nums.length-k];
}
function heapifyDown(nums,size,index){
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        if(left < size && nums[left] > nums[largest]){
            largest = left;
        }
        if(right < size && nums[right] > nums[largest]){
            largest = right;
        }
        if(largest !== index){
            [nums[index],nums[largest]]=
            [nums[largest],nums[index]];
            heapifyDown(nums,size,largest);
        }
}