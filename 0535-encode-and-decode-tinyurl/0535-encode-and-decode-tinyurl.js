/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let map = {}
let id  = 0;
var encode = function(longUrl) {
    id++;
    map[id] = longUrl;
    return "http://tinyurl.com/"+id
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let id = shortUrl.split('/').pop();
    return map[id];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */