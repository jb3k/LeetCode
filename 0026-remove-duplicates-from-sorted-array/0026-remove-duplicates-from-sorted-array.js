/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //pointer and for loop
        //if nums[i] !== nums[pointer]
            //nums.pop(nums[i]) then push back in '_'
            //increment pointer
    
    let pointer = 0
    
    for(let i = 1; i < nums.length; i++){
        if(nums[pointer] !== nums[i]){
            nums[++pointer] = nums[i]
        }
    }
    return ++pointer
    
    
    
    
};