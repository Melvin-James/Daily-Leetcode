/**
 * @param {string[]} strs
 * @return {string}

 
 */
 class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
 }
 class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let current = this.root;
        for(let ch of word){
            if(!current.children[ch]){
                current.children[ch] = new Node();
            }
            current = current.children[ch];
        }
        current.isWordEnd = true;
    }
    longestPrefix(){
        let prefix = '';
        let node = this.root;
        while(true){
            let keys = Object.keys(node.children);
            if(keys.length!==1 || node.isWordEnd) break;
            let char = keys[0];
            prefix+=char;
            node = node.children[char];
        }
        return prefix;
    }
 }
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return "";
    let trie = new Trie();
    for(let str of strs){
        trie.insert(str);
    }
    return trie.longestPrefix();
};