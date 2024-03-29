/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    
    let letterSet = new Set();
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (letterSet.has(s[i])) continue;
        let tempSet = new Set();
        letterSet.add(s[i]);
        let lastIndex = s.lastIndexOf(s[i]);
        if (lastIndex !== i) {
            for (let j = i + 1; j < lastIndex; j++) {
                tempSet.add(s[j]);
            }
            res += tempSet.size;
        }
    }
    return res;
    
    
};