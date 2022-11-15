/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arr = [];
	const obj = {};
  
  	for(let i = 0; i < nums.length; i++){
     let num = nums[i];
      if(arr.includes(num)){
        obj[num] += 1
        return true
      } else {
        arr.push(num)
        obj[num] = 1 
      }
    }
  
  
   return false
    
};