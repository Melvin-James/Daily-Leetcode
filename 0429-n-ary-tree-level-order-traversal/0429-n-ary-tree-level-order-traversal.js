/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const queue = [root];
    let result = [];
    while(queue.length){
        let levelSize = queue.length;
        let level = [];
        for(let i=0;i<levelSize;i++){
            let current = queue.shift();
            level.push(current.val);
            for(let child of current.children){
                queue.push(child);
            }
        }
        result.push(level);
    }
    return result;
};