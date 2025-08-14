/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = String(num).split('');
    let sum = str.reduce((acc,val)=>Number(val)+acc,0);
    if(sum<10){
        return sum;
    }
    return addDigits(sum);
};
