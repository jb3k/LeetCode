/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //create anagram helper func
    // loop thru str with l/r pointers, and substr
    
    let obj = {}
    let res = []
    for(let i = 0; i < p.length; i++){
        let char = p[i];
        if(obj[char]) obj[char]++
        else obj[char] = 1
    }    
    
    let left = 0;
    let right = 0; 
    let count = p.length 
        while (right < s.length) {
        
        if (obj[s[right]] > 0) count--;
        obj[s[right]]--;
        right++;
        
        if (count === 0) res.push(left);
        
        if (right - left == p.length) {
            if (obj[s[left]] >= 0) count++;
            obj[s[left]]++;
            left++;
        }
    }
    return res
    
    
    
    
};