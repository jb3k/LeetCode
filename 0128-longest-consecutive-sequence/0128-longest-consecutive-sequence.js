/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
//     let set = new Set(nums)
//     let count = 1
//     let max = 0
    
//     if(nums.length === 0) return 0
    
//     for(let num of set){
//         if(set.has(num + 1) && !set.has(num - 1)){
//             while(set.has(num + 1)){
//                 num++
//                 count++
//             }
//         }
//         max = Math.max(count, max)
//         count = 1
//     }
//     return max
    
        const set = new Set(nums)
    
    let longest = 0
    
    for(let i = 0; i < nums.length; i++){
        if (!set.has(nums[i] - 1)){
            let length = 0
            while(set.has(nums[i] + length)){
                length++
                longest = Math.max(length, longest)
            }
        }
    }
    return longest
    
    
};