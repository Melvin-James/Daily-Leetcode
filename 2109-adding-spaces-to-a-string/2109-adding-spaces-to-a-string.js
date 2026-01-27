/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result=[];
    let start=0;
    let end=0;
    for(let i=0;i<=spaces.length;i++){
        end = spaces[i];
        result.push(s.slice(start,end));
        start=end;
    }
    return result.join(' ');
};