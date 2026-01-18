/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkCircular(ch1,ch2){
    return ch1 === ch2;
}
var isCircularSentence = function(sentence) {
    let words = sentence.split(" ");
    let isCircular;
    for(let i=0;i<words.length-1;i++){
        if(!checkCircular(words[i][words[i].length-1],words[i+1][0])){
            return false;
        }
    }
    return checkCircular(words[words.length-1][words[words.length-1].length-1],words[0][0]);
};