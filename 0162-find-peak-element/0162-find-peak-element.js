/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // loop thru and check if the next number is not === && less than the curr number then its a peak and reeturn the prev number
    let left = 0, right = nums.length-1, mid;
    
    while(left < right) {
        mid = Math.floor((right+left)/2);
        if(nums[mid] > nums[mid+1]) right = mid;
        else left = mid+1;
    }
    return left;
    
};