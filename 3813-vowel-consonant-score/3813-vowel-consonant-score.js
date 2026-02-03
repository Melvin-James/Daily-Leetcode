/**
 * @param {string} s
 * @return {number}
 */
var vowelConsonantScore = function(s) {
    let vs = 0;
    let cs = 0;
    let vowels = 'aeiou';
    let consonants = 'bcdfghjklmnpqrstvwxyz'
    for(let ch of s){
        if(vowels.includes(ch)){
            vs++;
        }else{
            if(consonants.includes(ch)){
                cs++
            }
        }
    }
    if(cs===0) return 0;
    return Math.floor(vs/cs);
};