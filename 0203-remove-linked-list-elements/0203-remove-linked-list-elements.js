/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while(current.next){
        if(current.next.val !== val){
            current = current.next;
        }else{
            current.next = current.next.next;
        }
    }
    return dummy.next;
};