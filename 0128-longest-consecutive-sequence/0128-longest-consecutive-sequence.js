/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
  let counter = 0;
  
	for(let num of [...numSet]){
  		//find numbers that start a sequence
      	const prevNum = num - 1
        if(numSet.has(prevNum)) continue;
      
      	//find streaks if any
      	let currNum = num
      	let score = 1
      	
      	//see if the next number exists in the og set
      	let streak = () => numSet.has(currNum + 1)
        while(streak()){
        currNum ++
        score++
        }
      
      	counter = Math.max(counter, score)
      
    }
  return counter
};