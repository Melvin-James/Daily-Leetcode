/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occurance = {};
    for(let ele of arr){
        occurance[ele]=(occurance[ele] || 0)+1;
    }
    let array=Object.values(occurance);
    let res = array.filter((ele,index,array)=>{return array.indexOf(ele)!==index});
    let count=0;
    res.map((ele)=>count++);
    if(count===0){
        return true;
    }else{
        return false;
    }
};