/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let left = {};
    let right = {};
    let count = 0;
    let leftDistinct = 0;
    let rightDistinct = 0;

    for(let ch of s){
        if(!right[ch]){
            rightDistinct++;
            right[ch] = 0;
        }
        right[ch]++;
    }
       
    for(let ch of s){
        if(!left[ch]){
            leftDistinct++;
            left[ch] = 0;
        }
        left[ch]++;
        right[ch]--;

        if(right[ch] === 0){
            rightDistinct--;
        }

        if(leftDistinct === rightDistinct){
            count++;
        }
    }
    return count;
};