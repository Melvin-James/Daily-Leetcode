/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    let i = 0;
    while(i<n){
        fast = fast.next;
        i++;
    }
    if(!fast){
        head = head.next;
    }
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    if(slow.next){
        slow.next = slow.next.next;
    }
    return head;
}