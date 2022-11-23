/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let left = 0, right = newStr.length-1;
    
    while(left < right){
        if(newStr[left] !== newStr[right]) return false
        left++
        right--
    }
    return true
    
};