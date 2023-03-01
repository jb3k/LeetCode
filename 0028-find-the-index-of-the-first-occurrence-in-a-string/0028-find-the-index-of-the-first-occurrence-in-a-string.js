/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let l= 0
    let r = l + needle.length
    
    while(r <= haystack.length){
        let substr = haystack.substring(l,r)
        if(substr === needle) return l
        l++
        r++
    }
    return -1
    
    
};