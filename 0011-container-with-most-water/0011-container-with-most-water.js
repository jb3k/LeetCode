/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(nums) {
    //max = -infinity
    //double for loop starting first ind, 2nd at i+1
    //find the width, has to be the shorter one, find smaller between two points
    //find min height between two points (for area)
    //multiply w x h, if greater than max, make new max
    
//     let max = -Infinity;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             let width = j - i
//             let height = Math.min(nums[j], nums[i]);
//             max = Math.max(max, width * height);
            
//         }
//     }
    
//     return max
    
    
    //instantiate var
    //while loop pointer1<pointer2
    //find width and height
    //find area
    //pointers move either increment or decrement. if the height of first pointer < height pointer2, use higher height
    //return max
    
    
    let pointer1 = 0
    let pointer2 = nums.length - 1;
    let max = -Infinity;
    
    while(pointer1 < pointer2){
        let width = pointer2 - pointer1;
        let height = Math.min(nums[pointer2], nums[pointer1]);
        let area = width * height
        max = Math.max(max, area)
        
        if(nums[pointer1] > nums[pointer2]) pointer2--
        else pointer1++
        
    }
    return max
    
    
};