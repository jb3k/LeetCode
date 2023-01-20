/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //loop thru the nums arr
        // chcek to see if the first number is smaller than the next number
            // if the curr number is bigger, than swap and create a loop to check if thee number before is bigger or smaller
            
    let left = 0;
    let right = nums.length - 1;
    let current = left;
    
    const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
    
    while(current <= right) {
        if(nums[current] === 0) {
            swap(left, current);
            left++;
            current++;
        } else if(nums[current] === 2) {
            swap(right, current);
            right--;
        } else {
            current++;
        }
    }
    return nums
};
