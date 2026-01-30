/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let count = 0;
    let bannedSet = new Set(bannedWords);
    for(let msg of message){
        if(bannedSet.has(msg)){
            count++;
            if(count >=2) return true;
        }
    }
    return false;
};