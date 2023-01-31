/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    
    let count = 0
    let [l,r] = [0,1]
    
    while(l <= s.length){
        while(r <= s.length){
            if(helper(s.substring(l,r))){
            count++
            }
          r++
        }
        l++
      	r = l + 1
        
    }
    return count
    

};


var helper = function(word){
    if (word.length === 1) return true
    let str = ''
    for(let i = word.length - 1; i >= 0; i--){
        str += word[i]
    }
    
    return str === word
}