/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let hashMap = new Map()
var encode = function(longUrl) {
    const code = Math.random().toString(32).slice(5)
    const tinyUrl = `https://tinyurl.com/${code}` 
    hashMap.set(tinyUrl,longUrl)
    return tinyUrl
};
var decode = function(shortUrl) {
    return hashMap.get(shortUrl)
};
