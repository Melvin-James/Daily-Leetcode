/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let t = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let r = t.split('').reverse().join('');
    if(t===r){
        return true;
    }else{
        return false;
    }
};