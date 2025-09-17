var vowelStrings = function(words, left, right) {
    let vowels=['a','e','i','o','u'];
    let count = 0;
    for(let i=left;i<=right;i++){
        let word = words[i];
        if(vowels.includes(word[0]) && vowels.includes(word[word.length-1])){
            count++;
        }
    }
    return count;
};