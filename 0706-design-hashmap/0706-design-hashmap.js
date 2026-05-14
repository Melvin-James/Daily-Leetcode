
var MyHashMap = function() {
   this.size = 1000;
   this.storage = new Array(this.size);
};

MyHashMap.prototype.hash = function(key){
    return key%this.size;
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let index = this.hash(key);
    let bucket = this.storage[index];
    if(!bucket){
        this.storage[index] = [[key,value]];
    }else{
        const sameKey = bucket.find(item=>item[0]===key);
        if(sameKey){
            sameKey[1]=value;
        }else{
            bucket.push([key,value]);
        }
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let index = this.hash(key);
    let bucket = this.storage[index];
    if(bucket){
        const sameKey = bucket.find(item=>item[0]===key);
        if(sameKey){
            return sameKey[1];
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key);
    let bucket = this.storage[index];
    if(bucket){
        const itemIndex = bucket.findIndex(item=>item[0]===key);
        if(itemIndex !==-1){
            bucket.splice(itemIndex,1)
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */