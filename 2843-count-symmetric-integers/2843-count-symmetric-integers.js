/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count=0;
    for(let i=low;i<=high;i++){
        let t = i.toString();
        if(t.length %2 !==0) continue;
        let mid = Math.floor(t.length/2);
        let first=0;
        let second=0;
        for(let i=0;i<mid;i++){
            first+=Number(t[i]);
        }
        for(let i=mid;i<t.length;i++){
            second+=Number(t[i]);
        }
        if(first===second) count++;
    }
    return count;
};