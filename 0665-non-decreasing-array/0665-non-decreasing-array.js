/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (num > nums[i+1]) {
            if (nums[i-1] > nums[i+1]) {
                nums[i+1] = num;
            }
            count++;
        }
        if (count > 1) return false;
    }     
    return true;   
    
};