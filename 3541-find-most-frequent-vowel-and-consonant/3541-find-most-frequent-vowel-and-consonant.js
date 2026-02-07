/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowFreq = {};
    let conFreq = {};
    let maxVow=0;
    let maxCon=0;
    let vowels = new Set('aeiou')
    let consonants = new Set('bcdfghjklmnpqrstvwxyz')
    for(let ch of s){
        if(vowels.has(ch)){
            vowFreq[ch]=(vowFreq[ch]||0)+1
        }else if(consonants.has(ch)){
            conFreq[ch]=(conFreq[ch]||0)+1
        }
    }
    for(let ch in vowFreq){
        if(vowFreq[ch]>maxVow){
            maxVow = vowFreq[ch];
        }
    }
    for(let ch in conFreq){
        if(conFreq[ch]>maxCon){
            maxCon = conFreq[ch];
        }
    }
    return maxVow+maxCon;
};