/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    let res = []
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        res.push(num)
    }
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        res.push(num)
    }
    return res
    
};