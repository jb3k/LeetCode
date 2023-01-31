/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   
    let count = 0;
  for (let i = 0; i < s.length; i++) {
    expand(i, i) // odd length
    expand(i, i + 1) // even length
  }
  return count

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
  }
    
    
    
    
    
//     let count = 0
//     let [l,r] = [0,1]
    
//     while(l <= s.length){
//         while(r <= s.length){
//             if(helper(s.substring(l,r))){
//             count++
//             }
//           r++
//         }
//         l++
//       	r = l + 1
        
//     }
//     return count
    

};


// var helper = function(word){
//     if (word.length === 1) return true
//     let str = ''
//     for(let i = word.length - 1; i >= 0; i--){
//         str += word[i]
//     }
    
//     return str === word
// }