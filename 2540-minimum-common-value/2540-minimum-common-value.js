/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let res = [];
    let set = new Set(nums1);
    for(let num of nums2){
        if(set.has(num)){
            res.push(num);
        }
    }
    return res.length ? res[0] : -1;
};