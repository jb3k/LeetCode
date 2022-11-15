/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let sorted = strs.map(word => word.split('').sort().join(''))
  let hash = {}
  
  for(let i = 0; i < strs.length; i++){
  	let ele = strs[i]
    let sortedWord = sorted[i]
    
    if(hash[sortedWord]){
    	hash[sortedWord].push(ele)
    } else {
    	hash[sortedWord] = [ele]
    }
  }
  
  return Object.values(hash)
};