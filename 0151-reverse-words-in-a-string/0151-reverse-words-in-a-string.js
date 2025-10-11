/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let stack = [];
    for(let word of words){
        stack.push(word);
    }
    let finals = "";
    while(stack.length){
        let current = stack.pop();
        if(current){
            finals+=" "+current;
        }
    }
    return finals.trim()
};