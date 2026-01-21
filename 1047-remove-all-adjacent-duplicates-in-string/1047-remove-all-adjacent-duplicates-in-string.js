/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for(let ch of s){
        let current = ch;
        if(stack.length && stack[stack.length-1]===current){
            stack.pop();
        }else{
            stack.push(current);
        }
    }
    return stack.join('');
};