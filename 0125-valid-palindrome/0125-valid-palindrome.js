/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let alp = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let str = ''
    
    for(let i = 0; i < s.length; i++){
    let char = s[i]
        if(alp.includes(char.toLowerCase())) str += char.toLowerCase()
    }

    let left = 0;
    let right = str.length-1;
    
    while(left < right){
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
    
};