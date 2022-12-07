/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    
  if(nums.length <= 2) return Math.min(...nums)
  
  let area = 0
  let [l, r] = [0, nums.length -1]
  
  while (l <= r) {
  	let dif = r - l
    let min = Math.min(nums[l], nums[r])
    area = Math.max(area, dif * min)
    
    if(nums[l] <= nums[r]) l++
    else r--
  
  }
  
  return area

};