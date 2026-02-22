/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2);
    let index = [];
    for(let i=0; i<binary.length; i++){
        if(binary[i]==='1'){
            index.push(i);
        }
    }
    let maxDistance=0;
    for(let i=1;i<index.length;i++){
        let diff = index[i]-index[i-1]
        if(diff>maxDistance){
            maxDistance = diff;
        }
    }
    return maxDistance;
};