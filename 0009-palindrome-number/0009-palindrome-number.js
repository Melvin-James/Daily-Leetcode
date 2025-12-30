/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let t = x.toString();
    let left = 0;
    let right = t.length-1;
    while(left<right){
        if(t[left]!==t[right]) return false;
        left++;
        right--;
    }
    return true;
};