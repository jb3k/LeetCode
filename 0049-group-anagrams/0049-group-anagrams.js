/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // if we sort the letters inside each word it will auto group
    // gather each kind of anagram, store them as k/v key = ana , v = []
    // loop thru the strs, and push the words into their ana array
    
    
    let sorted = strs.map(word => word.split('').sort().join(''))
    
    let obj = {};
    sorted.forEach(ele => {
        if(!obj[ele]) obj[ele] = []
    })
    
    for(let i = 0; i < sorted.length; i++){
        let anagram = sorted[i]
        let word = strs[i]
        if(obj[anagram]) obj[anagram].push(word)
        
        
    }
    
    return Object.values(obj)
    
    
};