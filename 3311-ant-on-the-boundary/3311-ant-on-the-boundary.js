var returnToBoundaryCount = function(nums) {
    let location=0;
    let count =0;
    for(let i=0;i<nums.length;i++){
        location+=nums[i];
        if(location===0){
            count++;
        }
    }
    if(count){
        return count;
    }else{
        return 0;
    }
};