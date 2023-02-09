/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    //create set
    //loop thru string
    //conditional if set has letter
    //if doesnt then add to set
    //find how big the set is
    
//     let set = new Set();
//     let counter = 0
//     let maxSize = 0
    
//     for(let i = 0; i < s.length; i++){
//         if(set.has(s[i])){
//             set.delete(s[counter])
//             counter++
//         }
//         set.add(s[i])
//         maxSize = Math.max(maxSize, set.size)
        
//     }
//     return maxSize
    
    const set = new Set();
    let l = 0;
    let max = 0;

    for (let r = 0; r < s.length; r++) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, set.size);
    }
    return max;
    
};


