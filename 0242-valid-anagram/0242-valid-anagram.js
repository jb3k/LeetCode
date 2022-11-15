/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(a, b){
  let arr = []
  let obj1 = {};
  
  if(a.length !== b.length) return false;
  
  for(let i = 0; i < a.length; i++){
  	let word1 = a[i]
    
	if(arr.includes(word1)){
    	obj1[word1] += 1
    } else {
    	arr.push(word1)
      	obj1[word1] = 1
    }
  }

  for (let letter of b){
  	if (obj1[letter]) obj1[letter] -=1
    else return false
  
  }
  
  return true
  
}