/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let bucket = []
  let target = []
  let hash = {}
  for(let i = 0; i < nums.length; i++){
  	let num = nums[i];
    if(!hash[num]){
    	hash[num] = 1
    } else {
    	hash[num] += 1
    }
  }

	for(let [key, value] of Object.entries(hash)){
		if(!bucket[value]){
		bucket[value] = new Set().add(key)
		} else {
		bucket[value] = bucket[value].add(key)
		}
	}  
  
 	 for(let i = bucket.length - 1; i >= 0; i--){
  		let num = bucket[i]
        console.log(num)
    	if(bucket[i]) target.push(...num)
      	if(target.length === k) break
  	}
	
  	return target
    
};