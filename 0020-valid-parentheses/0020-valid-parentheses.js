/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const strs = s.split('');
    if(s.length === 1){
        return false;
    }
    for(let ch of strs){
        if(ch === '(' || ch === '[' || ch === '{'){
            stack.push(ch);
        }else if (ch === ')' || ch === ']' || ch === '}'){
            const top = stack.pop();
            if(ch === ')' && top !== '(' || ch === ']' && top !== '[' || ch === '}' && top !== '{'){
                return false;
            } 
        }
    }
    if(stack.length===0){
        return true;
    }else{
        return false;
    }
};