/**
 * @param {number[]} nums
 * @return {number}
 */
function isPrime(index){
    if(index<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(index);i++){
        if(index%i===0){
            return false;
        }
    }
    return true;
}
var splitArray = function(nums) {
    let psum=0;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(isPrime(i)){
            psum+=nums[i];
        }else{
            sum+=nums[i]
        }
    }
    return Math.abs(psum-sum);
};