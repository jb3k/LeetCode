/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

if(s.length === 1) return 1
  let arr = s.split(' ')
  for(let i = arr.length -1; i >= 0; i--){
  	let char = arr[i]
    if(char === '') continue
    return char.length
    
  }
    
};