/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let res = [];
    for(let i=1;i<num;i++){
        if(num % i === 0){
            res.push(i);
        }
    }
    let ans = res.reduce((acc,cur)=>cur+acc,0);
    return ans === num ? true : false;
};