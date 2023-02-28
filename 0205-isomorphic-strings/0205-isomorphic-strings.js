/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
        
//     let helper = (str) => {
//         let hash = {}
//         for(let i = 0; i<str.length;i++){
//             let char = str[i]
//             if(hash[char]) hash[char]++
//             else hash[char] = 1
//         }  
//         return Object.values(hash)
//     }
    
//     let sArr = helper(s)
//     let tArr = helper(t)
//     console.log(sArr, tArr)
    
//     for(let i = 0; i < sArr.length; i++){
//         let char1 = sArr[i]
//         let char2 = tArr[i]
//         if(char1 !== char2) return false
        
//     }
    
//     return true
    
    const hash1 = {}
    const hash2 = {}
    for(let idx = 0; idx < s.length; idx++){
		if(hash1[s[idx]] !== hash2[t[idx]]) return false
        hash1[s[idx]] = idx
        hash2[t[idx]] = idx          
    }
    console.log(hash1, hash2)
    
    return true
    
    
};