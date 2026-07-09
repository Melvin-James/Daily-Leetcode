/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let array = [];
    for(let i=1;i<=n;i++){
        if(i%3===0 || i%5===0 || i%7===0){
            array.push(i);
        }
    }
    return array.reduce((cur,acc)=>{
        return acc+cur
    },0)
};