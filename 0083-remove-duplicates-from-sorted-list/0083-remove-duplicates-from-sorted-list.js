/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let seen = new Map();
    let current = head;
    let prev = null;
    while(current){
        if(!seen.has(current.val)){
            prev = current;
            seen.set(current.val,true);
        }else{
            prev.next = current.next;
        }
        current = current.next;
    }
    return head;
};