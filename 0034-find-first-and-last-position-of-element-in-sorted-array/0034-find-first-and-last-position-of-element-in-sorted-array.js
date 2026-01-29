/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];
    const findBound = (isFirst)=>{
        let low = 0;
        let high = nums.length-1;
        let bound = -1;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            if(target === nums[mid]){
                bound = mid;
                if(isFirst){
                    high = mid -1;
                }else{
                    low = mid +1;
                }
            }else if(target<nums[mid]){
                high = mid-1
            }else{
                low = mid+1;
            }
        }
        return bound;
    }
    result[0]=findBound(true);
    result[1]=findBound(false);

    return result;
};