/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = points.map(point=>{
        const dist = Math.sqrt(point[0]**2+point[1]**2);
        return [point,dist];
    })
    const sorted = distances.sort((a,b)=>a[1]-b[1]);
    const sliced = sorted.slice(0,k);
    const result = sliced.map(([point])=>point);
    return result;
};