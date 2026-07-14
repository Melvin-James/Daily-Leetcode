function Node(val){
    this.val = val;
    this.next = null;
}


var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(!this.head) return -1;
    let i =0;
    let current = this.head;
    while(current){
        if(index === i){
            return current.val;
        }
        i++;
        current = current.next;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if(!this.head){
        this.head = node;
        return;
    }
    node.next = this.head;
    this.head = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new Node(val);
    if(!this.head){
        this.head = node;
        return;
    }
    let current = this.head;
    while(current.next){
        current = current.next
    }
    current.next = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0) return;
    let node = new Node(val);
    if(!this.head){
        if(index===0){
            this.head = node;
        }
        return;
    }
    if(index===0){
        node.next = this.head;
        this.head = node;
        return;
    }
    let i = 0;
    let current = this.head;
    while(current && i < index-1){
       current = current.next;
       i++;
    }
    if(!current){
        return;
    }
    node.next = current.next;
    current.next = node;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || !this.head) return;
    if(index===0){
        this.head = this.head.next;
        return;
    }
    let i = 0;
    let current = this.head;
    while(current && i < index-1){
       current = current.next;
       i++;
    }
    if(!current || !current.next){
        return;
    }
    current.next = current.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */