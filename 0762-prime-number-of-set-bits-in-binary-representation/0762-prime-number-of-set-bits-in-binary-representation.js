/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function bitNum(num){
    let count = 0;
    for(let i=0;i<num.length;i++){
        if(num[i]==='1'){
            count++;
        }
    }
    return count;
}
function isPrime(bits){
    if(bits<=1) return false;
    for(let i=2;i<=Math.sqrt(bits);i++){
        if(bits%i===0){
            return false;
        }
    }
    return true;
}
var countPrimeSetBits = function(left, right) {
    let count = 0;
    for(let num=left; num<=right; num++){
        let binary=num.toString(2);
        let bits = bitNum(binary);
        if(isPrime(bits)){
            count++;
        }
    }
    return count;
};