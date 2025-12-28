/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let t = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = t.length-1;
    while(left<right){
        if(t[left]!==t[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};