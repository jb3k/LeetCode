/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let [l, r] = [0, s.length -1];
    let swap = (l,r) => {[s[l], s[r]] = [s[r], s[l]] }
    
    while(l < r){
        swap(l,r)
        l++
        r--
    }
    return s
    
    
};