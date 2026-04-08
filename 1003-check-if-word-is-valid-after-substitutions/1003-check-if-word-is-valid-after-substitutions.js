/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        let ch = s[i];
        if(ch==='c'){
            let last = stack.pop();
            let secondLast = stack.pop();
            if(last !== 'b' || secondLast !== 'a'){
                return false;
            }
        }else{
            stack.push(ch);
        }
    }
    return stack.length === 0;
};