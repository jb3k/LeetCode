/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
  	nums.forEach((num, i) => hash[num] = i)
  
	for( let i = 0; i < nums.length; i++){
    	let num = nums[i]
        let targ = target - num
        // to make sure i am not looking at the number at the same idx twice
        if(hash[targ] && hash[targ] !== i){
        	return [i, hash[targ]]
        
        }
    }
    
    
};