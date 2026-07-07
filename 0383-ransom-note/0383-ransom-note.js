/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineArray = magazine.split('');
    let freqMagazine = {};
    for(let ch of magazineArray){
        freqMagazine[ch] = (freqMagazine[ch]||0)+1;
    }
    for(let ch of ransomNote){
        if(!freqMagazine[ch]){
            return false;
        }
        freqMagazine[ch]-=1;
    }
    return true;
};