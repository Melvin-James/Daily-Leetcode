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

var merge = function(left,right){
    let dummy = new ListNode(-1);
    let tail = dummy;
    while(left && right){
        if(left.val <= right.val){
            tail.next = left;
            left = left.next;
        }else{
            tail.next = right;
            right = right.next;
        }
        tail = tail.next;
    }
    if(left){
        tail.next = left;
    }
    if(right){
        tail.next = right;
    }

    return dummy.next;
}
var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }

    let slow = head;
    let fast = head;
    let prev = null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    let left = sortList(head);
    let right = sortList(slow);

    return merge(left, right);
};