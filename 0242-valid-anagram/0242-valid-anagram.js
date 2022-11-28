/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(a, b){
  let obj = {};
  
  if(a.length !== b.length) return false;
  
    for(let i = 0; i < a.length; i++){
    	let char = a[i]
        if(obj[char]){
        	obj[char]++
        } else {
        	obj[char] = 1
        }
    }

  for (let letter of b){
  	if (obj[letter]) obj[letter] -=1
    else return false
  
  }
  
  return true
  
}