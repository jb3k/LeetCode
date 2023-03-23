/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    let res = []
    for(let i = 0; i < 2; i++){
        res.push(...nums)
    }
    return res
    
};