/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //slow fast 
    // have the fast go every other... then total sum
    // have slow go every house
    
    let slow = 0;
    let fast = 0

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let temp = Math.max(num + slow, fast)
        slow = fast
        fast = temp
    }
    return fast
      
};