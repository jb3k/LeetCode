/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    
    // 2 pointers starting from beginning and end
    // var to store the max
    // loop thru, while l < r
    // calc the area
    // move the l / r pointer based on whatever is smaller
    
    
    let max = 0
    let [l,r] = [0, nums.length -1]
    
    while(l < r){
        let height = Math.min(nums[l], nums[r]);
        let width = r - l;
        let area = height * width
        max = Math.max(max, area)
        if(nums[r] >= nums[l]) l++
        else r--
        
    }
    
    return max
    
};