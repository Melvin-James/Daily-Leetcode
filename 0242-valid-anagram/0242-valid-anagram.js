/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const ht = new Map();
    for(let w of s){
        ht.set(w,(ht.get(w)||0)+1);
    }
    for(let w of t){
        if(!ht.has(w)){
            return false;
        }
        ht.set(w,ht.get(w)-1);
    }
    for(let count of ht.values()){
        if(count!==0){
            return false;
        }
    }
    return true;
};