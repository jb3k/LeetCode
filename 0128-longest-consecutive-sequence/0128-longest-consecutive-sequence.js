/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    
    // set to get rid of reoccuring nums
    // how do i know where im starting? i want to start from either the beginning or the end

    
        // Approach: Starting from the largest
        // loop thru the set, if there is a number that is 1 higher than the current number just continue... if theres nothing higher thats 1 integer above, then i can start my count.
        // have a variable that keeps track of the count... then going to start from that number which should be the highest number, then see if the set has that number -1, if it does add to the count if not, find the next number to move to
    
    // increment from starting point to see if theres a number +1 or -1 depending on where i start          from
    
    
    let numbers = new Set(nums);
    let max = 0
    let count = 1
    let pointer
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        if(!numbers.has(num+1)){
            pointer = num
            while(numbers.has(pointer - 1)){
                count++
                pointer--
            }
            max = Math.max(max, count)
            count = 1
        }
        
    }
    
    
    return max
    
        
};