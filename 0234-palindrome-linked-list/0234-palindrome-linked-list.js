/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let cur = slow;
    while(cur){
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    let left = head;
    let right = prev;
    while(right){
        if(left.val!==right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};