/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let result = [];
    let freq = {};
    let queue = [root];
    while(queue.length){
        let current = queue.shift();
        freq[current.val] = (freq[current.val]||0)+1;
        if(current.left)queue.push(current.left);
        if(current.right)queue.push(current.right);
    }
    let maxFreq=0;
    for(let key in freq){
       maxFreq = Math.max(maxFreq,freq[key]);
    }
    for(let key in freq){
        if(freq[key]===maxFreq){
            result.push(Number(key));
        }
    }
    return result;
};