/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let first = new Set('qwertyuiopQWERTYUIOP');
    let second = new Set('asdfghjklASDFGHJKL');
    let third = new Set('zxcvbnmZXCVBNM');
    let check;
    let final = [];
    for(let word of words){
        let count = 0;
        let res = word.split('');
        for(let ch of res){
            if(first.has(ch)){
                check = first;
                break;
            }else if(second.has(ch)){
                check = second;
                break;
            }else{
                check = third;
                break;
            }
        }
        for(let ch of res){
            if(check.has(ch)){
                count++;
            }
        }
        if(count===word.length){
            final.push(word);
        }
    }
    return final;
};