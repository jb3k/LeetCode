/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      let sorted = nums.sort((a, b) => a - b)
  let res = []
  
  for(let i = 0; i <= sorted.length; i++){
    let targ = sorted[i]
    if(i > 0 && targ === sorted[i - 1])
      continue
    
  	let [l, r] = [i + 1, sorted.length - 1]
    
    while (l < r){
      	let sum = targ + sorted[l] + sorted[r]
    	if(sum < 0 ) l+=1
      	else if(sum > 0 ) r-=1
      	else { 
          res.push([targ, sorted[l], sorted[r]]); 
          l += 1 
          while(nums[l] === nums[l - 1] && 1 < r){
          	l+=1
          } 
        }
      	
    }
  }
  
  return res
};