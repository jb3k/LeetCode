/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    let remainders = {0: -1}
    let sum = 0
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        
        if (k!=0) sum %= k
        
        if ( remainders[sum] !== undefined   ) {
            if(i-remainders[sum]>1) return true
        } else {
            remainders[sum] = i
        }
    }
    return false
    
    
};