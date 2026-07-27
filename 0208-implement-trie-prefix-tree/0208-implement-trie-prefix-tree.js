var Node = function(){
    this.children = {};
    this.isWordEnd = false;
}
var Trie = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let current = this.root;
    for(let ch of word){
        if(!current.children[ch]){
            current.children[ch] = new Node();
        }
        current = current.children[ch];
    }
    current.isWordEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let current = this.root;
    for(let ch of word){
        if(!current.children[ch]){
            return false;
        }
        current = current.children[ch];
    }
    return current.isWordEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let current = this.root;
    for(let ch of prefix){
        if(!current.children[ch]){
            return false;
        }
        current = current.children[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */