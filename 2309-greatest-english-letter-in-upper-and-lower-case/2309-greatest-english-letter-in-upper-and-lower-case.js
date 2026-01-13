/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let set = new Set();
    for(let i=0;i<s.length;i++){
        set.add(s[i]);
    }
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=alpha.length-1;i>=0;i--){
        if(set.has(alpha[i]) && set.has(alpha[i].toUpperCase())){
            return alpha[i].toUpperCase();
        }
    }
    return "";
};