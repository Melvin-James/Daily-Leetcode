/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const ht = {};
    for(let i=0;i<s.length;i++){
        ht[s[i]]=(ht[s[i]]||0)+1;
    }
    for(let i=0;i<s.length;i++){
        if(ht[s[i]]===1){
            return i;
        }
    }
    return -1;
};