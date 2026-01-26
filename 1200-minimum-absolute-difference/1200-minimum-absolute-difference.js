/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let diff;
    let minDiff=Infinity;
    let sorted = arr.sort((a,b)=>a-b);
    let result = [];
    for(let i=0;i<arr.length-1;i++){
        diff = Math.abs(arr[i]-arr[i+1]);
        minDiff = Math.min(diff,minDiff);
    }
    for(let i=0;i<sorted.length-1;i++){
        if(Math.abs(sorted[i]-sorted[i+1])===minDiff){
            result.push([sorted[i],sorted[i+1]])
        }
    }
    return result;
};