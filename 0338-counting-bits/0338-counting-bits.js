/**
 * @param {number} n
 * @return {number[]}
 */
function count(bin){
    let c = 0;
    for(let ch of bin){
        if(ch==='1'){
            c++;
        }
    }
    return c;
}
var countBits = function(n) {
    let res = [];
    for(let i=0;i<n+1;i++){
        let bin = i.toString(2);
        let r = count(bin);
        res.push(r);
    }
    return res;
};